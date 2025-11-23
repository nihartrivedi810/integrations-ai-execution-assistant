import express from "express";
import cors from "cors";

import { env } from "./config/env";
import { logger } from "./lib/logger";
import { requestLogger } from "./middlewares/requestLogger";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { rootRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(requestLogger);

app.use("/", rootRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(env.port, () => {
  logger.info("backend_started", {
    port: env.port,
    env: env.nodeEnv,
  });
});
