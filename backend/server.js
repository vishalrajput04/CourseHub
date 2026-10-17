import { port } from "./config/env.js";
import app from "./app.js";

app.listen(port, () => {
  console.log(`CourseHub API listening on http://localhost:${port}`);
});
