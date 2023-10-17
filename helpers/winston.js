import winston from "winston";
import chalk from "chalk";

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  let color;

  // Define colors based on log level
  switch (level) {
    case "error":
      color = chalk.red;
      break;
    case "warn":
      color = chalk.blue;
      break;
    case "info":
      color = chalk.green;
      break;
    case "verbose":
      color = chalk.cyan;
      break;
    case "debug":
      color = chalk.yellow;
      break;
    case "silly":
      color = chalk.magenta;
      break;
    default:
      color = chalk.white;
  }

  // Apply color and formatting
  const formattedMessage = color(`[${timestamp}] [${level}] ${message}`);

  return formattedMessage;
});

// Set up your logger
const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), customFormat),
  transports: [new winston.transports.Console()],
});

export default logger;
