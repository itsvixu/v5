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
