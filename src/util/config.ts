import * as dotenv from "dotenv";
dotenv.config();

export interface AppConfig {
  port: number | undefined;
}

export const config: AppConfig = {
  port: +process.env.HOST_PORT || 8080,
};
