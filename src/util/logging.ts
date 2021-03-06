import { createLogger, format, level, Logger, transports } from "winston";

const console: transports.ConsoleTransportInstance = new transports.Console({
  handleExceptions: true,

  format: format.combine(format.colorize(), format.prettyPrint()),
  level: "verbose",
});

export const logger: Logger = createLogger({
  transports: [console],
});

process.on("unhandledRejection", function (reason, p) {
  logger.warn(
    "Possibly Unhandled Rejection at: Promise ",
    p,
    " reason: ",
    reason
  );
});
