import app from "./app.js";
import "dotenv/config";
import { dbConnect } from "./database/dbConnection.js";
import cron from "./helpers/jobs/index.js";
import logger from "./helpers/winston.js";
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.log("error", err);
  console.log(
    "_______________________________________________________________"
  );
  logger.info(`server is running on ${port}`);
  dbConnect();
});
