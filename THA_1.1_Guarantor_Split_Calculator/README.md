# THA_1.1 — Guarantor Split Calculator
### RPIP Smart Guarantor Split & Fair-Share Allocation Engine

A free, single-file, browser-based tool that calculates a fair split of a loan guarantee requirement across multiple SACCO guarantors — instantly, consistently, and without a spreadsheet.

**Live demo:** deploy to GitHub Pages (steps below) → `https://<your-username>.github.io/THA_1.1_Guarantor_Split_Calculator/`

---

## 1. The Problem

When a member's loan needs guaranteeing, a Credit Officer often has several guarantors with very different deposit balances. Splitting the required guarantee amount among them "fairly" is a judgment call that's usually made by hand — and hand-made splits are:

- **Inconsistent** — the same scenario can get a different split depending on who's doing the math that day
- **Slow** — recalculating by hand (or in an ad-hoc spreadsheet) for every application eats appraisal time
- **Hard to defend** — if a member questions why they were asked for a bigger share than someone else, there's no repeatable, explainable method behind the number
- **Risky at the edges** — it's easy to accidentally over-expose a small-balance guarantor relative to their savings

This tool standardizes the split into two transparent, defensible methods, so every application gets the same fair treatment.

## 2. The Solution

Enter the required guarantee amount and each guarantor's available deposit. The engine instantly computes two allocation methods side by side:

| Method | Logic | Best for |
|---|---|---|
| **Equal Capped** (water-filling) | Everyone contributes an equal share, capped at their available deposit. Guarantors who can't meet the equal share contribute their full balance; the shortfall is re-split equally among the rest. | Peer guarantors who want shared, equal responsibility without overloading anyone below their means |
| **Proportional (Weighted)** | Each guarantor contributes the same *percentage* of their own deposit. | Groups where guarantors prefer contributing in line with their financial strength, so smaller savers aren't tied up disproportionately |

### Metrics computed

| Metric | Description |
|---|---|
| Total Guarantee Needed | Target requirement to be covered (e.g. KES 265,000) |
| Total Available Pool | Sum of all active guarantors' pledged deposits |
| Coverage Ratio (%) | Total Pool ÷ Needed — flags instantly if the group is short |
| Individual Guarantee Share | KES amount assigned to each guarantor under each method |
| Exposure % | Assigned Share ÷ that guarantor's own deposit — how much of their savings is tied up |

## 3. Features

- Supports **1–7 guarantors** with progressive "Add Slot" disclosure (starts at 5, expands to 7 max, aligned with standard underwriting policy)
- **Live coverage gauge** — animates in real time as deposits are typed, turns red on shortfall
- **Deficit warning** — flags immediately if total deposits can't cover the required guarantee, with the exact shortfall
- Dual-tab, side-by-side comparison of **Equal Capped** vs **Proportional** results
- Zero backend, zero database, zero cost — a single static HTML file
- Branded to the RUPSA SACCO green/gold identity

## 4. Tech Stack

- **HTML5 + vanilla JavaScript** — the entire calculation engine, no build step
- **Bootstrap 5** (CDN) — layout, tables, tabs
- **Animate.css** (CDN) — row and card transitions
- No frameworks, no npm install, no server — open `index.html` in any browser and it works

## 5. Repository Structure

```
THA_1.1_Guarantor_Split_Calculator/
├── index.html                      # Complete app — layout, styling, and calculation engine
├── README.md                       # This file
├── LICENSE                         # MIT License
└── .github/
    └── workflows/
        └── deploy.yml              # GitHub Actions workflow — auto-deploys to GitHub Pages on push
```

## 6. Run Locally

No installation needed:

```bash
git clone https://github.com/<your-username>/THA_1.1_Guarantor_Split_Calculator.git
cd THA_1.1_Guarantor_Split_Calculator
open index.html      # macOS
# or just double-click index.html on Windows/Linux
```

## 7. Deploy Free on GitHub Pages

**Option A — Manual (2 minutes)**
1. Create a new GitHub repository named `THA_1.1_Guarantor_Split_Calculator`
2. Push `index.html`, `README.md`, and `.github/` to the `main` branch
3. Go to **Settings → Pages**
4. Under **Branch**, select `main` and `/ (root)`, then **Save**
5. Your calculator is live at `https://<your-username>.github.io/THA_1.1_Guarantor_Split_Calculator/`

**Option B — Automatic (included workflow)**
This repo ships with `.github/workflows/deploy.yml`, which deploys to GitHub Pages via GitHub Actions on every push to `main`. Just enable Pages once under **Settings → Pages → Source: GitHub Actions**, then push — no manual redeploys needed afterward.

## 8. Worked Example

Required guarantee: **KES 265,000**, split across 4 guarantors with deposits of KES 75,000 / 300,000 / 45,000 / 181,000:

| Guarantor | Deposit | Equal Capped | Proportional |
|---|---|---|---|
| G1 | 75,000 | ~73,333 | ~33,070 |
| G2 | 300,000 | ~73,333 | ~132,280 |
| G3 | 45,000 | 45,000 (capped) | ~19,842 |
| G4 | 181,000 | ~73,333 | ~79,808 |
| **Total** | **601,000** | **265,000** | **265,000** |

## 9. Roadmap / Convergence

This is one module in a wider THA_ series of credit-operations tools built around RUPSA's loan appraisal and portfolio-protection workflow — designed to eventually converge with the SACCO's broader credit-decision tooling on shared identifiers (e.g. `member_id`).

## 10. Data & Privacy Note

This tool takes numeric deposit inputs only — it does not store, transmit, or require any member name, phone number, or personally identifying information. All calculation happens client-side in the browser; nothing is sent to a server.

## 11. License

MIT — see `LICENSE`.

---
Built by **Zacheas Mwatha Maina (THA011)** · Prowriters101 · Credit Officer/Intern, RUPSA Regulated NWDT Sacco Ltd
