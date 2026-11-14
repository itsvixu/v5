# Portfolio v3 — review of v2 and build notes

Written 10 November 2026. v3 lives at `Portfolio/vixu-portfolio co-work v3`. v2 is untouched and still the live site.

## Verdict on v2

v2 is a good site for a Director reader and it is aimed at the wrong failure point. The November audit says applications are lost on level fit at sift and on recent hands-on craft at round 2 (Monzo, SumUp). v2 sells leadership and business outcomes and shows no decision-level craft.

| What the evidence says is needed | v2 | v3 |
|---|---|---|
| Craft shown as decisions, alternatives, trade-offs and misses | Four-part summaries | Every case study has decision cards, a "what went wrong" section and results with qualifiers |
| Recent work, under two years old | Save Your Way has the thinnest write-up | Save Your Way is the flagship, with the rejection, the testing limits, the icon, the receipt and the bug grading |
| Native iOS and Android | In passing | Trainline page, Save Your Way app adoption (4.3%), native rounds on the checkout module |
| AI (12 of 15 JDs) | One line | Its own page: the garden wildlife build, the agent, nine variants in a day, team practice |
| Design systems, accessibility, internal tools | Absent | A "where to find" index on the home page that links to each |
| VIXU as real 2026 work | A timeline entry | The AI page leads with it. It is the page that most needs your input |
| A link to one case study | Overlays, no addresses | Real pages under `work/` |
| Lead-band positioning | "Design leadership, measured in outcomes" | Default lens is hands-on lead. `?lens=lead` gives the leadership reading |

## Corrections v2 needs now, whatever happens to v3

These are live on vixu.co.uk and conflict with `CV_source_of_truth.md`.

1. **Hotels.com card case study and About page:** "+145% / +8% from statement-credit redesign; ~$400k/month incremental revenue". Two parallel changes, not isolated, and the $400K is a projection about Show the Math.
2. **Checkout case study:** the CVV test ($4.7M, "91%+ significance") is presented as the largest of the six wins. It is not one of the six, and the 91% is in no recovered document.
3. **One Key case study:** "I directed a five-way competitive benchmark". The research team ran it. Programme figures are written as sole ownership ("I led... sole point of design authority").
4. **Save Your Way:** conversion shown as "0.0%". The readout says −0.10%, inconclusive.
5. **Age signals:** "over two decades", "20+ yrs", "2004 to Present", "The twenty-year ledger".
6. **Unsourced:** "founding the London Loyalty XD Voices forum" is in no evidence file.
7. **Olympics:** "all online Games-readiness training" and "Product Owner". The record says seven of eight modules, and the title was Producer.

## What v3 deliberately leaves out

- Names of colleagues and executives (your choice: roles only).
- The Visa Consulting fee and the card's ranking in that audit.
- The names of banks in the issuer selection.
- The reason you left Expedia.
- The security clearance line. It belongs on targeted CVs.
- The public-service variant (`public-service.html` and the `ps-` pages). Not rebuilt. Say if you want it.

## Evidence limits

- I read `Transcripts.pages` in full (pilot, Trainline, Lloyds). There is no VIXU session in it yet, so the AI page is built from the source of truth and has the most gaps.
- Trainline mobile ticketing has one sentence of evidence. The page has a marked gap for it.
- Reflections ("what I would do differently") appear only on Save Your Way, where they are yours. I did not write reflections for you on other pages.

## Before deploying

1. Open each page with `?review=1` and settle the amber items below.
2. Add images. Rebuilds must be labelled.
3. Write the garden wildlife section in your own words and add its address.
4. Read every page aloud once for voice. It was drafted to your voice rules but not run through the voice-rewrite skill.
5. Decide whether v3 replaces v2 or runs beside it.

## Claims to confirm before deploying (31)

| Page | Claim | What to check |
|---|---|---|
| building-with-ai.html | Add two or three decisions here. For example, a point where the model's output was wrong and you redesigned ar | this page is the answer to "nothing recent with working files". It needs your account of the build, a live URL and the Figma file |
| building-with-ai.html | It is live at (address to add). | add the URL, or say when it launches |
| building-with-ai.html | At Expedia Group I built a working prototype of an agent. | confirm when it was built |
| card-offer-in-checkout.html | The experience was picked out by the Expedia Group CEO in an executive walkthrough. | approved safe wording from the source of truth. Decide if it goes on a public site |
| checkout-north-star.html | The damage was concentrated among people looking at free-cancellation bookings. | a loss figure from an internal test. Decide if it can be public |
| checkout-north-star.html | It showed | check the detail of this test and the one above before publishing. The evidence file marks both as needing recall |
| leading-a-design-team.html | "I've greatly benefited from our structured 1:1 mentorship sessions, which focus specifically on career growth | internal feedback. Get permission before publishing, or cut |
| leading-a-design-team.html | Team pulse ratings went up after I became workstream lead. | no scores, dates or survey name captured. Be ready to back this up |
| leading-a-design-team.html | "In the absence of a Design Director he took on a number of additional responsibilities to ensure the design t | internal feedback. Get permission before publishing, or cut |
| lloyds-loans-and-mortgages.html | Add one example of something you had to overrule. | the evidence review asks for a specific instance |
| one-key-card-application.html | Set the design direction, ran the reviews with the bank, and designed parts of the application and the Show th | say exactly which screens and flows were yours. The Monzo deck left this open |
| one-key-card-application.html | These four are programme results. I was a core designer on the programme and do not claim them as mine alone. | none of the four appears in a recovered document. Be ready to speak to them from memory |
| one-key-card-application.html | These are four of the changes. | confirm whether this redesign shipped, and the date |
| one-key-card-application.html | Phase one shipped. | confirm status of the hosted application |
| one-key-card-application.html | Add what was decided. | the outcome is not recorded anywhere. Add it or cut this decision |
| one-key-card-application.html | Add what the test showed. | be ready to say which offers, when, and the result |
| one-key-card-application.html | "His willingness to work to understand the Wells Fargo POV and create a path forward that works for both WF an | from 2020 feedback about the earlier Hotels.com card. Get permission before publishing, or cut |
| save-your-way.html | A content design lead worked with me on the words. Product owned the business case and scope. Engineering buil | check each of these, they were CONFIRM items on the Monzo deck |
| save-your-way.html | Full rollout followed in October 2025. | confirm launch month |
| save-your-way.html | After the One Key loyalty programme launched, the business could see it was losing some of them, and Save Your | you told this as the backstory for Monzo. Decide if it can be public |
| save-your-way.html | For most of the project we could not test the idea with the public. Marketing's view was that testing would gi | the transcript also mentions a final round of user testing that included the icon. Confirm how to describe what was and was not allowed |
| save-your-way.html | A senior product leader who had recently joined | the transcript says Chief Product Officer, the Monzo deck says VP of Product. Roles only, so pick the wording |
| save-your-way.html | A toggle, like the one members already used to apply OneKeyCash at checkout. | confirm this was a real alternative |
| save-your-way.html | Explaining it inline on the booking form, or sending people to a separate page. | confirm the alternatives you explored |
| save-your-way.html | The research supported it. | the transcript says the results were "conclusive" but not in which direction. Confirm |
| save-your-way.html | Around the same time the company's chairman, who had been reviewing the marketing, pushed for the phrase "bank | this identifies one person even without a name. Decide if it stays |
| save-your-way.html | It is still in use and has become a large part of how the feature is branded. | check it is still live |
| save-your-way.html | It then became the standard template for major Expedia Group projects. | confirm the scope of adoption and who else was involved |
| save-your-way.html | The banner was replaced in a separate homepage test that launched on 22 September 2025. | confirm your part in the fix |
| trainline-apps.html | We used a pattern that leaves the next option partly visible at the edge of the screen, so people understand t | the dictation garbled the name of this pattern. Name it properly |
| trainline-apps.html | Add what shipped on iOS and Android, what ticket barriers and poor signal did to the design, and what happened | the evidence review calls this the most in-demand thing you have, with the least written about it. It needs its own recall session |

## Images to add (50)

| Page | Frame | What belongs there | Candidate in v2 |
|---|---|---|---|
| index.html | Booking form choice, iOS | The Save Your Way choice on the booking form. | images/SYW CKO.png |
| index.html | Card application, step 1 | The One Key card application form. | images/HCOM CC journey 1.png |
| index.html | Garden wildlife site, home | The UK garden wildlife site, live. |  |
| index.html | Ticket selection, mobile | Trainline ticket selection on a phone. |  |
| index.html | Checkout module, 2021 | The credit card module inside Hotels.com checkout. | images/HCOM CC ux.png |
| index.html | Booking form, before and after | The Hotels.com booking form across the test programme. | images/CKO progression.png |
| index.html | Loan application prototype | The self-service business loan application. |  |
| index.html | Team workshop, Rome | A workshop photo or a Miro board from the team. |  |
| index.html | Games-readiness module | A screen from the London 2012 training modules. | images/PGA_welcome.jpg |
| about.html | Portrait | A photo of you. Optional. |  |
| building-with-ai.html | Garden wildlife site, home | The live site's home page. |  |
| building-with-ai.html | Garden wildlife site, mobile | A creature page on a phone. |  |
| building-with-ai.html | Working file | The Figma file or the build in progress. This is the frame a craft interviewer will ask to open. |  |
| building-with-ai.html | Agent output | The newsletter the agent fed, with any confidential detail removed. |  |
| building-with-ai.html | Points calculator concept | The calculator concept for the card page. |  |
| building-with-ai.html | Lightning talk | A slide or a photo from the 2025 talk. |  |
| card-offer-in-checkout.html | Coded research notes | A page of the coded notes or the prototype used in the study. | images/HCOM CC research.png |
| card-offer-in-checkout.html | Module evolution | The module at each round, in order. | images/HCOM CC ux.png |
| card-offer-in-checkout.html | Statement credit in checkout | The statement credit offer in the booking form. | images/HCOM CC PP.png |
| checkout-north-star.html | North Star concept | A concept from the North Star document or the leadership presentation. | images/CKO discovery.png |
| checkout-north-star.html | Change dates concept | The change-dates prototype. | images/CKO change dates.png |
| checkout-north-star.html | Winning variants | Control and winning variant for two of the tests. | images/CKO CVV.png |
| checkout-north-star.html | Localised payment designs | Payment sections for two or three markets side by side. | images/CKO payments.png |
| leading-a-design-team.html | Team and workstreams | A simple diagram of the four workstreams and who sat where. |  |
| leading-a-design-team.html | Knowledge gaps register | The register, with names and any confidential detail removed. |  |
| lloyds-loans-and-mortgages.html | Loan application prototype | A screen from the Axure prototype. A rebuild is fine if labelled. |  |
| lloyds-loans-and-mortgages.html | Mortgage tool, before and after | A before and after of one screen. A labelled rebuild is fine. |  |
| london-2012.html | Games-readiness module | A screen from one of the modules. | images/PGA_torchrelay.jpg |
| london-2012.html | Accessibility settings | The settings panel in a module. | images/tri_help.jpg |
| one-key-card-application.html | Card lifecycle | A flow diagram of the card lifecycle, from the pillar page to everyday use. | images/PP hero.png |
| one-key-card-application.html | Two prototypes | The two low-fidelity prototypes side by side. | images/HCOM CC research.png |
| one-key-card-application.html | Application, step 1 | The first step of the application. | images/HCOM CC journey 1.png |
| one-key-card-application.html | Pre-fill explainer | The screen that explains pre-filled details. |  |
| one-key-card-application.html | Income bottom sheet | "What income to include" open over the form. |  |
| one-key-card-application.html | SDK as supplied | The bank's form before styling. A rebuild is fine if labelled. |  |
| one-key-card-application.html | SDK in our look and feel | The same form after styling. | images/HCOM CC instant use.png |
| one-key-card-application.html | Show the maths in checkout | The statement credit worked out against the booking total. | images/STM.png |
| save-your-way.html | End-to-end flow, mobile | The whole journey on mobile, from the homepage banner to the receipt. | images/SYW FLOW.png |
| save-your-way.html | Before and after the pivot | The rejected version next to the version that shipped. Label rebuilds as rebuilds. |  |
| save-your-way.html | Booking form choice, iOS | The two options on the native booking form. | images/SYW CKO.png |
| save-your-way.html | How it works drawer, iOS | The drawer open over the booking form. |  |
| save-your-way.html | Copy, from early to checkout | The same explanation at three points in the journey, showing how the numbers change. |  |
| save-your-way.html | Icon options | The piggy bank and the luggage tag side by side. |  |
| save-your-way.html | Receipt experience | Receipt designs and the prototype that was researched. |  |
| save-your-way.html | Readout charts | Adoption by platform and by traveller type, redrawn from the test readout. | images/SYW DATA.png |
| trainline-apps.html | Ticket selection, mobile | The ticket selection screen with the next option partly in view. |  |
| trainline-apps.html | Flow on iOS | The booking flow on iOS. |  |
| trainline-apps.html | Flow on Android | The same flow on Android, showing the back behaviour. |  |
| trainline-apps.html | Mobile ticket | A mobile ticket in the app. |  |
| trainline-apps.html | Brand refresh mood board | The mood board or a screen from the refreshed design. |  |

## Changes after first review (10 November 2026)

- Removed the "How to read the numbers" panel and all evidence tags. Provenance now lives in the wording: "measured at the time" (8% on home and Trainline), "as modelled by analysts" ($31.7M), plus the existing "estimated", "expected" and programme-result sentences. If you edit a figure, keep its qualifier in the sentence.
- Headline font changed from Bricolage Grotesque to Figtree (700, looser tracking). Body font is still Atkinson Hyperlegible.
- Case study navigation: a solid green "All work" button in the sticky header, a bordered button at the top of the page, and the same button at the bottom beside "Next".
