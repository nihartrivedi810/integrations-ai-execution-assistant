import dotenv from "dotenv";

dotenv.config();

type Env = {
  nodeEnv: "development" | "test" | "production";
  port: number;
};

function getEnv(): Env {
  const nodeEnvRaw = process.env.NODE_ENV || "development";
  const nodeEnv =
    nodeEnvRaw === "production" || nodeEnvRaw === "test"
      ? nodeEnvRaw
      : "development";

  const port = Number(process.env.PORT || "4000");
  if (Number.isNaN(port)) {
    throw new Error("Invalid PORT value in environment");
  }

  return {
    nodeEnv,
    port,
  };
}

export const env = getEnv();
