Mafias Rival — Final (Vue 3 + Vite) with Mock API

Structure:
- src/ : Vue app source (components, assets)
- server/ : Express server with mocked API endpoint /api/leaderboard
- index.html : main html (Tailwind via CDN used for quick styling)
- package.json : scripts to run dev and build

Quick start:
1. unzip and cd into project folder
2. npm install
3. npm run dev
   - This runs both Vite dev server and the mock Express API (using concurrently)
4. Open http://localhost:5173 for frontend (vite) and API is available at http://localhost:3000/api/leaderboard

Notes:
- In production build (npm run build), the Express server serves the files from /dist.
- Tailwind is included via CDN for simplicity; replace with a proper Tailwind build if you prefer.
- Replace placeholder images in src/assets with your real art.
