# v5 proof of concept

Three scroll-driven moments, plain JS (v5.js), no libraries. GSAP was not needed.

1. Hero: five domain icons (card, key, bag, ticket, bed) orbit your head. Scroll turns them. They do not stop the page; hero text and buttons are visible on load.
2. Tools: sixteen logos start as a swirl and settle into the grid as the section scrolls in. The use-lines fade in once each tile lands.
3. Colleagues: the first four quotes pin the screen and build from grey to black word by word, then jump to the next. The other two sit below as plain cards.

Reduced motion or no JavaScript: static orbit, plain grid, plain scroller of quotes.

To confirm
- New tool lines (Adobe, GitHub, Cloudflare, Claude Code, Gemini, Microsoft Copilot) are placeholders. Review mode (?review=1) shows them in amber.
- Axure shows the "x" mark only and Dscout the icon only (cropped from the full logos so they read at tile size). Sketch is recoloured to its yellow. Check you are happy with both.
- The quotes still need the givers' permission before this goes live.
- Photo is a circle crop of your headshot. A transparent cut-out would let icons pass behind your head.
- index.html is edited directly. The old build.py source in ~/work4 is now behind this version.


## Round 2 (13 Nov)
- Greeting: "Morning, I'm Vik." (5am to midday), Afternoon (to 5pm), Evening (to 10pm), otherwise "Hi, I'm Vik." Set before first paint from the visitor's own clock; "Hi, I'm Vik." stays as the default for search engines and no-JavaScript.
- Brands strip: label "I've designed for, and with", two bands (For / With) moving in opposite directions. Logo file names are in images_logos_README.txt (move it into images/logos/ as README.txt if you like). Logos render as one flat dark colour; they need transparent backgrounds.
- Quotes: 10 on the home page (4 pinned, 6 in a wall with Read more) and 24 on recommendations.html. 18 new quotes were mined from the 2020 to 2025 feedback files. Every quote is a verbatim excerpt, credited by role only. Roles are my reading, so confirm them (review mode shows them in amber), and get each giver's permission.
- Pinned section: scroll length per quote follows its word count; "Skip to more recommendations" link; section releases after the fourth.
- Hero icons are unchanged pending your pick from icon-sheet.html.

## Round 3 (13 Nov, evening)
- Orbit: one full lap on load (3.2s, ease in-out) before scroll takes over; scroll coupling doubled on screens under 900px.
- Tools: timed tornado, plays once when the grid reaches 70% of the viewport. Funnel of logos, three and a half turns over 4.2s, centred on the viewport, then lands in the grid. Not scroll-scrubbed, so it runs the same on phones.
- Logos: renamed to the slugs in README.txt. locog was a WebP with an .svg extension, converted to locog.png. Met Police, London Ambulance, LOCOG are raster/boxed so they render in grey (class `raw`) rather than flat black. Still missing, text wordmark shows: College of Policing, Home Office, KarmaRama, The Calling. wells fargo.svg is in the folder but not in the strip (not on the brand list).
- Old unsuffixed logo files (with spaces, ambulance.png etc.) can be deleted once happy.

## Round 6: image population from v2
- 19 slots filled from the v2 live images (resized to 1600px max, in `images/work/`), plus the garden wildlife landing screenshot on the home card and Building with AI.
- Home card thumbs: new CSS block at the end of style.css.
- Left as placeholders (no suitable v2 image): checkout module card (HCOM CC ux is a flow diagram), card-offer module evolution and statement credit, application step 1, SDK look and feel, all Trainline, Lloyds, Leading a design team and remaining Building with AI slots, SYW pivot, drawer, copy, icons, receipts, pre-fill, income sheet.
- v2 images include "Confidential" footers and test figures. v2 already published them; review before launch.
