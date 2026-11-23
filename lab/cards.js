/* Lab cards. One entry per lab case study, read by the lab page.
   This is a plain script, not a JSON file, so it works when the site is opened
   from a folder (no fetch), like the rest of the site. See README.md. */
window.LAB_CARDS = window.LAB_CARDS || [];

window.LAB_CARDS.push({
  slug: 'card-offer-intelligence',
  url: 'card-offer-intelligence.html',
  when: 'VIXU Design, 2026, and Expedia Group, 2025',
  title: 'Card Offer Intelligence',
  line: 'A scanner that reads competitor credit card offers twice a week, and a dashboard that shows what changed next to a screenshot of the page.',
  // The two lens lines are drafts in your voice, as on the home page. Confirm or rewrite them.
  angle: {
    craft: 'What I make now: a scanner, and the dashboard I designed around it, built with Claude Code.',
    lead: 'Where I kept people in the loop on a system that reads competitor offers.'
  },
  thumb: '../images/card-offer-intelligence/thumb.jpg',
  thumbAlt: 'The Card Offer Intelligence change feed in the demo, with a screenshot of the Wells Fargo Active Cash page beside a welcome bonus change',
  status: 'Live prototype',
  links: {
    live: 'https://itsvixu.github.io/card-offer-intelligence/',
    demo: 'https://itsvixu.github.io/card-offer-intelligence/demo/',
    code: 'https://github.com/itsvixu/card-offer-intelligence'
  },
  updated: '2026-11-18'
});

window.LAB_CARDS.push({
  slug: 'uk-garden-creatures',
  url: 'uk-garden-creatures.html',
  when: 'VIXU Design, 2026',
  title: 'UK Garden Creatures',
  line: 'Twelve interactive stories about UK garden wildlife for primary school children. Each one has a scroll-driven reveal and ends with a quiz and a badge.',
  // The two lens lines are drafts in your voice, as on the home page. Confirm or rewrite them.
  angle: {
    craft: 'What I make now: a set of illustrated, animated stories for children, built with Claude Code and Cowork.',
    lead: 'How I took one idea to a reusable format and tested it with children before showing it to a school.'
  },
  thumb: '../images/uk-garden-creatures/thumb.jpg?v=2',
  thumbAlt: 'The Garden Creatures landing page with cards for a butterfly, a dragonfly and a leafcutter bee on a green hill',
  status: 'In testing',
  updated: '2026-11-18'
});

window.LAB_CARDS.push({
  slug: 'ranis-dream',
  url: 'ranis-dream.html',
  when: 'VIXU Design, 2026',
  title: "Rani's Dream",
  line: 'One level of a story game for children aged 9 to 11, built around Hindu stories and a short set of rules for how the gods appear.',
  // The two lens lines are drafts in your voice, as on the home page. Confirm or rewrite them.
  angle: {
    craft: 'What I make now: a game for children, with original artwork drawn in layers that scroll at different speeds.',
    lead: 'Where I wrote down the rules for treating sacred stories with care, and sent every picture and sentence to an advisor before showing it to children.'
  },
  thumb: '../images/ranis-dream/thumb.jpg',
  thumbAlt: 'Rani, a girl with a long golden scarf, standing on a path at dusk beside a river, with temple silhouettes, floating lamps, a large moon and a tangle of vines ahead',
  status: 'Private prototype',
  updated: '2026-11-17'
});

window.LAB_CARDS.push({
  slug: 'chinese-zodiac',
  url: 'chinese-zodiac.html',
  when: 'VIXU Design, 2026',
  title: 'Chinese Zodiac',
  line: 'A scrolling story for phones. Enter a birth date and it works out your zodiac animal and element from the real Lunar New Year date, then gives you a card to share.',
  // The two lens lines are drafts in your voice, as on the home page. Confirm or rewrite them.
  angle: {
    craft: 'What I make now: a mobile story with animated line drawings that trace themselves on, made for in-app browsers.',
    lead: 'How I settled the rules first, such as when the zodiac year starts and what the card is allowed to share, and wrote down what is left before launch.'
  },
  thumb: '../images/chinese-zodiac/thumb.jpg',
  thumbAlt: 'The reveal screen for a 1980 birth date: a gold line drawing of a monkey inside a ring of the twelve animals in Chinese characters',
  status: 'Prototype, not live yet',
  links: {
    code: 'https://github.com/itsvixu/chzodiac'
  },
  updated: '2026-11-11'
});
