# Dorm-Dash

Dorm-Dash is a campus task‑marketplace prototype where students post quick errands (snacks, pickups, print jobs) and nearby student runners fulfill them. The app is built with React + Vite + Tailwind, uses Supabase for data, and includes an interactive route map powered by React‑Leaflet.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- React Router
- Supabase JS v2
- React‑Leaflet + Leaflet
- Lucide React
- ESLint

## Core Features

- Multi‑page routed app:
  - `/` Home
  - `/features`
  - `/how-it-works`
  - `/safety`
  - `/runner-dashboard`
  - `/requester-dashboard`
  - `/login`
  - `/signup`
- Shared layout:
  - Sticky navbar
  - Light/dark theme toggle
  - Footer
- **Requester Dashboard**
  - Post tasks to Supabase (`requests` table)
  - Recent requests list
- **Runner Dashboard**
  - Fetch open tasks from Supabase
  - Realtime updates (Supabase channel)
  - Interactive map that plots pickup → dropoff for the selected task
- Global Support Chatbot widget

## Feature Details

1. Task Marketplace Flow
   Students create a request with item description, pickup location, dropoff location, and a tip. These requests are inserted into Supabase with `status = open`, making them immediately discoverable by runners.

2. Requester Dashboard
   The requester dashboard provides a fast “quick request” form with basic validation, optional photo preview, and a “post request” action that writes to Supabase. After a successful post, the form resets and the new request appears at the top of the recent list.

3. Runner Dashboard
   The runner dashboard loads open requests on mount, then listens for realtime inserts from Supabase. Clicking a task sets it as the active task and highlights the row, which in turn updates the route map.

4. Interactive Route Map (React‑Leaflet)
   The map is centered on Amity Noida and locked to campus bounds. When a task is selected, pickup and dropoff markers render with a dashed polyline between them, while a frosted pill displays the route text. Custom divIcon markers avoid broken default Leaflet icons in Vite.

5. Realtime Updates
   Supabase realtime subscriptions ensure new requests appear without refreshing. This is used on the runner side so the task list updates as soon as a requester posts.

6. Theme Toggle
   Light and dark modes are implemented by toggling the `dark` class on the `html` element. The user’s preference is saved in `localStorage` and restored on reload.

7. Multi‑page Navigation
   React Router handles all pages with a shared layout. The sticky navigation includes active link styling and keeps the experience consistent across pages.

8. Auth Screens (UI‑only)
   Login and signup are present as functional forms with validation and routing, intended as placeholders for future Supabase Auth integration.

9. Support Chatbot Widget
   A persistent floating support button expands into a panel with quick actions, providing guided help without leaving the current page.

10. Design System Consistency
   Cards, pills, and panels share a consistent rounded radius, soft shadows, and light/dark palettes to keep the UI cohesive across pages.

## Data Model (Supabase)

Table: `requests`

Columns:

- `id` (uuid / serial)
- `item_description` (text)
- `pickup_location` (text)
- `dropoff_location` (text)
- `tip_amount` (numeric)
- `status` (text, default `open`)
- `created_at` (timestamp)

RLS is currently disabled for prototyping.

## Environment Variables

Create a `.env.local` in the project root:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

If you deploy, set the same variables in your hosting provider.

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

## Leaflet Notes

Leaflet CSS is imported once in `src/main.jsx`:

```jsx
import 'leaflet/dist/leaflet.css'
```

The map uses a dark tile layer and custom divIcon markers to avoid broken default marker assets in Vite.

## Project Structure

```text
src/
  components/
    RouteMap.jsx
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
  supabaseClient.js

main.html        # legacy prototype
netlify.toml     # deployment config
```

## Notes

- The React app is the primary implementation for deployment.
- `main.html` is kept for reference as the legacy prototype.
