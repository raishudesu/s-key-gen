import express from "express";
import { generate } from "./routes/generate";
import defaultRoute from "./controllers/defaultController";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/", defaultRoute);
app.use("/generate-key", generate);

app.listen(4000, () => {
  console.log(`Server running at PORT: ${4000}`);
});

export default app;
