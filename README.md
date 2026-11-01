# ClearLane CPU Studio

Public, mobile-friendly Mario Kart 8 Deluxe CPU preset editor. Current site version: **v0.23 (101 karts; Ink Hatcher)**.

## Features

- Eight matched kart, tyre and glider presets per CPU driver (52 stock drivers).
- 101 built-in vehicle choices; staged future kart, tyre and glider entries.
- VS Race and Battle Mode teammate assignments, stored separately.
- Frame-size and CPU colour settings; all configuration and legacy JSON import/export run locally in the browser.
- Designed for iPhone/Android and desktop; offline support with a service worker.

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
