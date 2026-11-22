# Design spec · Daria Giotina portfolio (v2)

**Figma:** https://www.figma.com/design/ZswGUJyNdV14Up7HHJtCAE
Page "Website" holds: `Hero · load state` (above), `Desktop · 1440 (v2)`, `Mobile · 390 (v2)`, `Motion & build notes (v2)`, and `Components` (left).

The layout, section rhythm and motion follow an editorial portfolio the owner admires: Instrument Serif / Sans, a scroll-driven photo hero with floating stickers, a tilted marquee, numbered project rows, a dark mindset band, a pinned horizontal experience track, a dark gallery, a photo fan and a big contact headline. All copy, content and visuals are Daria's own; no text, images or code are copied.

**Own twist:** an automotive + data identity. A wireframe car replaces the globe in Motivation, a generic data-pipeline diagram anchors the Work section, and projects are split into hiring tracks.

## Brand (v2: rosy linen + mauve, professional)

| Token | Hex | Use |
|---|---|---|
| bg/canvas | `#F3EDEA` | Linen page background (warm, slight rose undertone) |
| bg/card | `#FBF8F6` | Cards |
| accent/tint | `#EBE0DE` | Soft panels, status tags, credit pill |
| bg/dark | `#1E1A1C` | Mindset + Gallery |
| ink/primary | `#1B1719` | Headings |
| ink/body | `#433B3E` | Body text |
| ink/muted | `#8A7F82` | Labels, captions |
| ink/inverse | `#F8F3F1` | Text on dark / accent |
| accent/primary | `#7A3450` | The only accent: buttons, numbers, signature, band |
| accent/deep | `#5E2740` | Small accent text (AA contrast) |
| accent/soft | `#D4BFC3` | Highlights on dark |
| line/soft | `#E4DAD7` | Dividers, borders |

One accent colour, used sparingly. No sparkles, hearts or emoji.

**Type:** Instrument Serif (H2 96 px, italic for section labels and captions), Instrument Sans (body 18 / 1.6, uppercase labels with 8–12% tracking), Mrs Saint Delafield (signature only).

## Sections

| # | Section | Notes |
|---|---|---|
| — | Header | DG monogram, nav (Work, Projects, Motivation, Experience, Highlights, Skills, Gallery, Contact), docked CTAs, EN / RO, scroll-progress line |
| 01 | Hero | **State A:** full-bleed B/W portrait, particle field, stickers (*AI & Data Science × Software*, *Kautex Textron / AI & Data Science Engineer*, *University of Craiova / B.Eng. Software Engineering '27*, *CRA ⇄ BONN*, *RO · EN · C1*, line-art car icon), status pill "Graduating June 2027 · Open to junior software, ML & game dev roles". **State B:** card portrait, name marquee (outline + filled rows), drawn signature |
| — | Marquee band | AI & Data Science · Software Engineering · Machine Learning · Game Development · Craiova ⇄ Bonn |
| — | Statement | "I turn engineering data into tools people actually use. Software engineering student · AI & data science engineer at Kautex." |
| 02 | **Work** | Role card (AI & Data Science Engineer, Kautex Textron, KDP, Dec 2025 – now; intern Sep – Nov 2025; three rotation team names). Confidentiality note. Generic pipeline: raw data → ETL → analysis → ML → dashboards. Six stack cards. **No project names, results, numbers, suppliers or parts.** |
| 03 | **Projects** (personal) | Sticky switcher: **A · AI & Data** (AI Skincare Companion, Underwater Vision & ROV Sensors) · **B · Software** (Venue Booking System, Parallel Image Processing, E-commerce Storefronts) · **C · Games** (Push or Fall, Snack Heist, Kintsugi), then an "Also on GitHub" strip |
| 04 | Motivation | Quote + 4 paragraphs + wireframe car |
| 05 | Mindset | Data before models · Build tools people actually use · If it isn't tested, it isn't done |
| 06 | Experience | AI & Data Science Engineer · B.Eng. · Intern · Erasmus+ 2025 · Game jam · Erasmus+ 2024 |
| 07 | Highlights | 2 photos + 6 cards (Bonn agent workshop, game jam, Thessaloniki, live game, C++ certificates, C1 + Social Enterprise Manager) |
| 08 | Skills | Interests, languages, AI & data, software, games & 3D, AI tooling, spoken languages |
| 09 | Gallery | Dark, outline Build / Learn, 6 photo placeholders |
| 10 | Say Hello | Photo fan + LinkedIn, GitHub, Roblox |
| 11 | Contact | Avatar, LET'S CONNECT, email · LinkedIn · GitHub · Download CV |

Both Roblox games (Push or Fall, Snack Heist) carry the credit **"Art by [Artist name] · National University of Arts Bucharest"**. Daria's part: game design, all code, Blender pipeline (and live-ops for Push or Fall).

Full motion notes are on the "Motion & build notes (v2)" board in Figma.

## Confidentiality

- Work at Kautex is shown only as role, dates, team names and tech stack. No project descriptions.
- The career vault and company documents never go into this repo (see `.gitignore`).

## To fill in before launch

- [ ] Artist's name (and link, if they want one)
- [ ] Your part in the Venue Booking System (team of 3)
- [ ] Email to show (currently `your.email@example.com`)
- [ ] OK to mention the Bonn agent workshop? (public LinkedIn post, but it's a work event)
- [ ] Photos (see `public/images/README.md`), Roblox link, CV PDF
