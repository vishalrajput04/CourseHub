import { port } from "./config/settings.js";
import app from "./app.js";

app.listen(port, () => {
  console.log(`CourseHub API listening on port ${port}`);
});
