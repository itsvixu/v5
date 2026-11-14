# Portfolio v4: what changed from v3 and what you need to add

Built 13 November 2026 in its own folder. v3 is untouched. Case study pages are the same as v3, with scroll reveals added.

## What is new on the home page

1. **Person first.** "Hi, I'm Vik." with a photo, then one plain sentence about what you do. The lens still switches the wording (`?lens=lead`).
2. **Logo marquee.** Slow sideways scroll of who you have designed for. It pauses on hover and becomes a static row if the visitor has reduced motion on.
3. **Selected work as cards.** Image-led, one wide lead card, figures count up as they scroll into view.
4. **What I use.** Ten tools, each with a logo and one line, then a row of methods.
5. **What colleagues say.** Six quotes from your 2025 year-end feedback in a swipeable row with arrow buttons.
6. **Motion.** Hero entrance, scroll reveals, a thin progress bar, a slight parallax on the photo, hover lifts. All of it switches off for visitors with reduced motion, and without JavaScript everything is simply visible.

## Add these files

| What | Where | Notes |
|---|---|---|
| Your photo | `images/vik.jpg` | Portrait, about 4:5, at least 640 x 800. Until it exists a "VT" placeholder shows. |
| Company logos | `images/logos/<name>.svg` | `expedia-group`, `hotels-com`, `vrbo`, `lloyds-banking-group`, `trainline`, `london-2012`, `college-of-policing`. They show in grey. Until a file exists, the name shows as text. |
| Tool logos | `images/tools/<name>.svg` | `figma`, `sketch`, `axure`, `miro`, `confluence`, `jira`, `usertesting`, `dscout`, `vscode`, `claude`. Until a file exists, a letter tile shows. |

I did not draw or copy any company or tool logos. Take the official SVGs from each brand's press or brand page. Keep London 2012 as text: the Games marks are tightly restricted.

## Check before publishing (review mode: `?review=1`)

- **Quotes.** Taken word for word from your year-end feedback. Each one needs the giver's permission. Roles are my reading of the feedback, not records, so confirm each one. Names are left out on purpose. Only the 2025 file was used. The 2020 to 2024 reviews and the older feedback sheets are not mined yet.
- **Tool lines.** Written from your CV and the case studies. Confirm what you really use each tool for. Sketch, Jira, UserTesting and Dscout are the least certain.
- **Marquee.** Check you are happy to show each client's name or logo. Wells Fargo and other partner banks are not included.
- **Dropped from the home page:** the "Where to find what you are looking for" list. Its links are now a row of chips under the work cards.

## Files changed

`index.html` (new), `style.css` (added a v4 block), `main.js` (added motion), all pages (progress bar and the `js` hook). Everything else is as v3.
