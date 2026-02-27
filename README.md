# Dorm-Dash

Dorm-Dash is a campus task-marketplace app where students can post quick requests (snacks, pickups, print runs, etc.) and nearby student runners fulfill them.

This repository contains:
- A **React + Vite + Tailwind** application (primary app)
- A legacy single-file prototype at `main.html` (kept for reference)

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- React Router
- Lucide React (icons)

## Features

- Multi-page app with routed views:
  - Home
  - Features
  - How it works
  - Safety
  - Runner Dashboard
  - Requester Dashboard
  - Login
  - Signup
- Global navigation and theme toggle
- Request posting flow in Requester Dashboard
- Shared request data rendered in Runner Dashboard
- Persistent Support chatbot UI with quick actions

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

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
main.html   # legacy prototype
```

## Notes

- Theme state and demo request data are currently persisted in `localStorage`.
- `main.html` still contains the older prototype implementation and can be removed once no longer needed.
