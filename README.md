# Dorm-Dash

Dorm-Dash is a campus task-marketplace prototype where students can post requests (snacks, pickups, print jobs, etc.) and nearby student runners can fulfill them.

## Repository Contents

This repo currently includes two implementations:

1. **Primary app (React + Vite + Tailwind)**
   - Source: `src/`
   - This is the version intended for deployment.

2. **Legacy prototype (single file)**
   - File: `main.html`
   - Kept for reference and comparison during migration.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- React Router
- Lucide React
- ESLint

## Core Features (React App)

- Multi-page routed app:
  - `/` Home
  - `/features`
  - `/how-it-works`
  - `/safety`
  - `/runner-dashboard`
  - `/requester-dashboard`
  - `/login`
  - `/signup`
- Shared app layout with:
  - Sticky navbar
  - Theme toggle (light/dark)
  - Footer
- **Persistent Support Chatbot** (global floating widget)
  - FAB in bottom-right
  - Quick actions for common support flows
  - Expandable chat panel
- Request flow in Requester Dashboard:
  - Item + source + tip input
  - Optional image upload/preview
- Shared request visibility in Runner Dashboard
- Local persistence via `localStorage`

## Data Persistence

The React app stores demo data in browser local storage:

- Theme: `theme`
- Requests: `dorm_dash_react_requests`

The legacy `main.html` uses separate local storage keys for its own demo logic.

## Getting Started

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Preview Production Build Locally

```bash
npm run preview
```

## Netlify Deployment

Netlify config is included in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* -> /index.html` (HTTP 200)

If a deployment behaves unexpectedly:

1. Ensure latest commit is deployed.
2. Use **Clear cache and deploy site** in Netlify.
3. Hard refresh browser (`Ctrl/Cmd + Shift + R`).

## Project Structure

```text
src/
  components/
    SupportChatbot.jsx
  layout/
    AppLayout.jsx
  pages/
    Home.jsx
    Features.jsx
    HowItWorks.jsx
    Safety.jsx
    RunnerDashboard.jsx
    RequesterDashboard.jsx
    Login.jsx
    Signup.jsx
  App.jsx
  main.jsx
  index.css

main.html        # legacy prototype
netlify.toml     # deployment config
```

## Notes

- The React app and `main.html` are separate implementations; behavior may differ.
- For production use, prefer the React app and treat `main.html` as archival.

