# CourseHub backend

This folder contains the CourseHub API. `server.js` starts the server, `app.js` connects routes and shared middleware, `routes/` maps API URLs to handlers, `controllers/` handles requests, and `models/` reads and writes MongoDB records.

Run `npm install`, copy `.env.example` to `.env`, set `MONGODB_URI` and `JWT_SECRET`, then run `npm run dev`. Node.js 22.5 or newer is required.

See the [project guide](../README.md) for the Render settings and API route list.
