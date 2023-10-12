import express from "express";
import { generate } from "./routes/generate";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/generate-key", generate);

app.listen(4000, () => {
  console.log(`Server running at PORT: ${4000}`);
});

export default app;
