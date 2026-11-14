# VIXU portfolio v3

Plain HTML, CSS and JavaScript. No build step and no libraries. Unlike v2 it opens straight from the folder (double-click `index.html`), because case studies are real pages and nothing is fetched.

## What is different from v2

- Case studies are pages with their own addresses, under `work/`. You can link a recruiter to one.
- Each case study follows the craft-interview structure: my part and the team's, what made it hard, decisions with the alternatives, results, what went wrong, what I would change.
- Every figure is qualified in the sentence around it (measured at the time, modelled by analysts, projected before launch, a programme result). There are no tag labels and no key. Keep the qualifier in the words if you edit a number.
- One site, two readings (see Lens).
- One visual direction. The v2 theme engine and `?vibe=` are gone.

## Lens

- `https://www.vixu.co.uk/` or `?lens=craft` : hands-on reading, for Lead, Staff and Principal roles. Save Your Way first.
- `?lens=lead` : leadership reading, for Manager, Head and Director roles. Leading a design team first.

The lens changes the headline, the standfirst, the order of the work list and one line per project. It is remembered for the browser session, so it follows the visitor from page to page.

## Review mode

Open any page with `?review=1`. Every claim that still needs your confirmation is highlighted in amber with a note, and the bar at the top counts them along with the images still to add. `?review=0` turns it off. `V3_REVIEW_NOTES.md` lists them all.

In normal mode those claims read as ordinary text, so go through them before deploying.

## Images

Search for `IMAGE SLOT`. Each one says what belongs there and, where v2 already has a likely image, names it. Copy the file into `images/`, then replace the `<div class="hole">…</div>` with `<img src="…" alt="…">` and keep the `<figure>` around it. If a screen is a rebuild, say so in the frame name, for example "Booking form choice, iOS (rebuilt)".

## Application links and analytics

Same GoatCounter scheme as v2 (`GOATCOUNTER_CODE` at the top of `main.js`).

- Per application: `https://www.vixu.co.uk/?ref=tesco` or `https://www.vixu.co.uk/?lens=lead&ref=deel`
- Straight to one case study: `https://www.vixu.co.uk/work/save-your-way.html?ref=monzo`
- Exclude yourself: open once with `?notrack=1`
- New event: `lens/craft` or `lens/lead`, so you can see which reading a visitor got.

Local previews are never counted.

## Deploy

Same as v2. Check locally, copy the whole folder into `Portfolio/Deploy`, upload to Cloudflare. Old v2 links with `?vibe=departures` still open the home page; the parameter is ignored.

## Files

```
index.html              Home: positioning, work list, where-to-find index
about.html, contact.html
work/*.html             Nine case study pages
style.css, main.js
images/                 Empty. Add images here.
```


## v4 additions

See `V4_NOTES.md`: person-first home page, logo marquee, tools grid, quotes carousel and scroll motion. Photo and logos go in `images/vik.jpg`, `images/logos/` and `images/tools/`.
