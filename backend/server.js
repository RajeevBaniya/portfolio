import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import contactRoutes from "./routes/contact.js";

export function createApp() {
  const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", 1); // Render's proxy: rate-limit by the visitor's IP

  app.get("/health", (req, res) => res.send("ok"));

  // cors() only hides the response from the browser, so refuse other websites outright.
  app.use((req, res, next) => {
    const { origin } = req.headers;
    if (origin && !allowedOrigins.includes(origin)) {
      return res.status(403).json({ error: "Origin not allowed." });
    }
    next();
  });
  app.use(cors({ origin: allowedOrigins }));

  const limiter = rateLimit({
    windowMs: 60_000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { error: "Too many requests. Please wait a minute and try again." },
  });
  app.use("/contact", limiter, express.json({ limit: "16kb" }), contactRoutes);

  app.use((req, res) => res.status(404).json({ error: "Not found." }));

  app.use((err, req, res, _next) => {
    // body-parser errors carry a 4xx status (bad JSON, body too large)
    const status = err.status >= 400 && err.status < 500 ? err.status : 500;
    if (status === 500) console.error(err.message);
    res.status(status).json({ error: status === 500 ? "Something went wrong." : "Invalid request." });
  });

  return app;
}

if (import.meta.main) {
  const port = process.env.PORT || 3001;
  createApp().listen(port, () => process.stdout.write(`Backend listening on port ${port}\n`));
}
