import mongoose from "mongoose";
import logger from "../helpers/winston.js";

export const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => logger.info("DB Connected!"))
    .catch((error) => logger.error("DB Error", error));
};
