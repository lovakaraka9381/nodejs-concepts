import express from "express";
import test from "./routes/test.router.js";
import helmet from "helmet";
import logger from "./helpers/winston.js";
const app = express();

// Use Helmet!
app.use(helmet());

//logging request info

app.use((req, res, next) => {
  logger.warn(
    `method:${req.method}, Url: ${
      req.url
    }, Timestamp: ${new Date().toISOString()}`
  );
  next();
});

//uncatch errors
process.on("uncaughtException", (err) => {
  logger.error(err);
  process.exit(0);
});
app.use("/", test);

//Global error handling

export default app;
