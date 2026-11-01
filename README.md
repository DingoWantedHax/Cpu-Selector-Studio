# ClearLane CPU Studio

Public, mobile-friendly Mario Kart 8 Deluxe CPU preset editor. Current site version: **v0.27 (101 karts; Ink Hatcher, IPS32-only CPU export)**.

## Features

- Eight matched kart, tyre and glider presets per CPU driver (52 stock drivers).
- 101 built-in vehicle choices; staged future kart, tyre and glider entries.
- VS Race and Battle Mode teammate assignments, stored separately.
- Frame-size and CPU colour settings; all configuration and legacy JSON import/export run locally in the browser.
- Designed for iPhone/Android and desktop; offline support with a service worker.

## Architecture and safeguards

- `index.html`: accessible mobile-first markup, including eight no-JavaScript fallback slots.
- `app.js`: verified CPU profile editor, JSON format migration and export guards.
- `styles.css`: responsive styling.
- `sw.js`: network-first offline cache; bump version whenever static assets change.
- `netlify.toml`: Netlify static deployment, security response headers and no-cache directives for updated files.

**101-kart read-only import:** v0.25 accepts only the SHA-256-pinned owner-provided P855-lineage 101-kart `subsdk2` for locally reading its `CLCP` 52 × 8 CPU configuration. Browser-side checks validate the 101-card name/model registry, CPU helper and profile checksum. The 101-card source **cannot export or modify game files**. The uploaded Nintendo executable and recovered CPU presets are **not stored in the repository**. Use a JSON backup before importing profiles.

**101-kart protection:** the P847 backend supports only 100-card test modules. The P855 101-kart Ink Hatcher module is not compatible. The experimental P847 ZIP requires a source-verified module and an explicit check that the installed game is still a P847 100-card setup. Ink Hatcher or staged future parts cannot be compiled to an installable CPU patch. No claim of verified CPU runtime or team/colour hooks is made.

Tests for v0.24: JS parser (`node --check`), mobile and desktop browser runs, eight kart selectors (101 built-ins), legacy catalogue migration, local JSON/profile/team saves, fail-closed BODY118 compiler, independent Python ZIP/CRC verification. The live Netlify deployment itself is separate from these local tests.

## No-IPS 101-kart runtime experiment

The private paired ExeFS test uses only the owner's original P828 `main` and P855 101-card `subsdk2`; no IPS files. Both files must be installed together initially. The website can then compile 52 drivers x 8 presets into a new `subsdk2`, **only when paired with the CPU-enabled `main`**. The website requires the exact original backup `subsdk2` for each rebuild. Never replace a different or newer kart expansion. Random CPU colours and custom teams are still configuration-only. The no-IPS website exporter does not apply frame-size overrides. No live race verification has been completed. Always preserve both original ExeFS files for rollback.

## Build and deploy

This is a **static site**. Netlify should use:

- Repository: `DingoWantedHax/Cpu-Selector-Studio`
- Production branch: `main`
- Base directory: repository root
- Build command: none
- Publish directory: `.`

Pushing a commit to `main` triggers Netlify only **after this repository has been connected as the site's deploy source in Netlify**. Claiming a Netlify site or connecting a GitHub account is not by itself a repository-to-site link.

Use the **existing Netlify project**, not a second project. The browser stores profiles in localStorage scoped to the site's domain; preserving the existing hostname preserves saved profiles. Always export a JSON backup before major changes or clearing browser data.

## Runtime safety

This site is a configuration editor, not proof of in-game compatibility. Ink Hatcher = logical BODY118, physical BODY62, `K_Inh` (101st kart). Its **CPU game-side hook is not yet verified**, so selecting it blocks CPU game ZIP export. New staged parts and custom team assignments likewise block unsafe installable export. The 101-card rebuilt `subsdk2` must **not** be replaced by older 100-card module outputs. Random colours/teammate assignment in-game remain unverified.

No game executable or proprietary Mario Kart assets are included in this repository.

## v0.27 experimental IPS-only CPU option
The editor now accepts the owner's exact unchanged P828 main and P855 101-kart subsdk2, then emits two IPS32 files named by NSO Build ID. Both NSOs remain unchanged. When the user's CPU selections differ from the embedded 52x8 CLCP table, the second IPS contains that table and its CRC. Do not install the prior no-IPS paired test. Exact-source SHA pins and a confirmation prevent accidental use on modified builds. This is not an in-game validation of the main-to-sub SDK branch.
