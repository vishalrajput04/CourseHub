# CourseHub frontend

`src/app.jsx` connects URLs to page components. `src/lib/api.js` sends requests to the backend and attaches the login token. Page components are in `src/components/`.

For frontend development, run `npm install` and `npm run dev` from this directory. API requests use the Render URL in `.env.example`. To use a local backend, create `.env` with `VITE_API_URL=http://localhost:4000`.

See the [project guide](../README.md) for the Vercel setup and API route list.
