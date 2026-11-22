# What junior SWE / ML / AI job ads ask for (Nov 2026)

How this was done: I did not read hundreds of individual ads one by one. I used published analyses that each covered a large number of postings (about 3,500 junior SWE ads, 48,000 SWE ads of all levels, 1,000 and 247 ML-engineer ads, about 100 junior ads), plus a sample of real 2026 European junior AI-engineer postings. The analyses disagree on exact percentages, so read the numbers as rough guides.

## What comes up again and again

| Requirement | How common | Where your site proves it |
|---|---|---|
| **Python** | In nearly every ML/AI ad; about 34% of junior SWE ads, more in other samples | Projects 1, 2, 4; skills |
| **SQL** | About 30% of junior SWE ads; a core skill for data roles | Skills; web projects |
| **Java / JS / TS** | Java about 42% of junior SWE ads; JS/TS high in smaller samples | Skills; full-stack work |
| **ML framework (PyTorch / TensorFlow)** | Almost all ML-engineer ads | Project 2 (PyTorch, DINOv2) |
| **Statistics, pandas, scikit-learn** | The basics for entry-level data roles | Projects 1 and 4 |
| **Cloud (Azure / AWS)** | About 29% of junior SWE ads; common in EU junior AI ads | Azure pipelines (Projects 1, 4) |
| **AI / LLM experience** (agents, RAG, prompt design, MCP) | About 29–32% of junior ads; ML6, Netguru and others name agents, RAG and MCP | Project 5, skills, Highlights |
| **Git, testing, CI/CD** | Treated as baseline | 199 unit tests (Project 3), leakage tests and results registry (Project 2) |
| **Docker / Kubernetes** | Often listed in junior AI ads; Kubernetes usually a bonus | **Gap:** not in your vault yet |
| **Shipping to production / real users** | Expected from week one | Project 1 is in daily use; Project 3 is live |
| **Degree + internship or project portfolio** | Most ads; projects matter more than certificates | Education, internship, KDP |
| **Communication, teamwork** | Nearly every ad | Workshops, supplier study, report-out |

## What recruiters say they check on a portfolio site

1. **Skimmable in under a minute.** The first reader is often not an engineer. Each project uses the same layout: number, title, tags, status, two short paragraphs, "my part", stack, link.
2. **Problem → what I built → result**, with the reasoning, not only the tech list. Each project text follows this order.
3. **Proof it is real:** status tags (IN DAILY USE, LIVE ON ROBLOX, 2ND PLACE), links to GitHub and the live game.
4. **Honest "my part" line** for team work. Added to every project.
5. **AI work that shows judgement**, not a wrapper. The thesis story (testing a hypothesis, finding no gain and saying so, calibration, abstaining when unsure) is exactly that.
6. **Works on a phone.** Mobile frame designed.
7. **CV download and contact one click away.** The CTAs stay docked in the header.

## What I added to the design because of this

- A **STACK line** on every project, so keyword-scanning recruiters find Python, SQL, PyTorch, Azure and FastAPI quickly.
- A **"MY PART" line** on every project.
- **Status tags** that show production / live / awarded.
- The **Skills** section grouped the way job ads group them: languages, ML and data, software engineering, cloud and AI tooling.
- The status pill says what you want: *Graduating June 2027 · Open to junior SWE / ML roles*.

## Gaps worth closing (these would tick more boxes)

1. **Docker:** containerise the thesis FastAPI service (a `Dockerfile` plus `docker compose up`) and say so on Project 2. Small effort, shows up in lots of ads.
2. **A small RAG or LLM project in a public repo.** Agents, RAG and embeddings come up in many EU junior AI ads. Your agent work is internal; one public repo would make it visible.
3. **CI on GitHub:** a GitHub Actions workflow running the thesis tests. It backs up the "if it isn't tested, it isn't done" line.
4. **READMEs** with a short problem / approach / result and a screenshot on the repos the site links to.

## Sources

- [What Junior Software Engineering Jobs Ask For (freehire, ~3,500 junior postings)](https://freehire.me/insights/roles/software_engineering/junior)
- [Software Engineer Skills in 2026: What 48,207 Postings Actually Require](https://interviewstack.io/blog/software-engineer-skills-companies-want-2026)
- [I Analyzed 100+ Junior Dev Job Postings in 2026 (Medium)](https://medium.com/activated-thinker/i-analyzed-100-junior-dev-job-postings-in-2026-heres-what-companies-actually-want-b5720b096a00)
- [In-Demand Machine Learning Engineer Skills in 2026 (365 Data Science)](https://365datascience.com/career-advice/career-guides/machine-learning-engineer-skills/)
- [Data Science Skills & Tools Ranked by Demand (Careery)](https://careery.pro/blog/data-science-careers/data-science-skills)
- [Entry-Level Hiring Trends for ML Graduates (research.com)](https://research.com/degrees/entry-level-hiring-trends-for-machine-learning-graduates-where-new-grads-have-the-best-odds)
- [Junior AI Engineer – Netguru](https://apply.workable.com/netguru/jobs/view/60648FBA5C.md)
- [Junior AI Engineer – Satori Analytics](https://apply.workable.com/satori-analytics-1/jobs/view/6677BE6340.md)
- [Junior AI/ML Engineer – European Dynamics](https://builtinlondon.uk/job/junior-ai-ml-engineer-python-developer/11678661)
- [Software Engineer Portfolio That Proves You Can Ship (Underdog)](https://underdog.io/blog/software-engineer-portfolio)
- [What Makes a Tech Portfolio Stand Out (Artech)](https://www.artech.com/blog/tech-portfolio-standout-get-interviews/)
- [Building a Developer Portfolio in 2026 (Hyperskill)](https://hyperskill.org/blog/post/building-a-developer-portfolio-in-2026-what-actually-gets-attention)
