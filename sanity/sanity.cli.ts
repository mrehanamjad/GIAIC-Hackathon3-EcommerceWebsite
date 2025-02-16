import { defineCliConfig } from "sanity/cli";
import dotenv from "dotenv";

dotenv.config();

export default defineCliConfig({
  api: {
    projectId:  process.env.VITE_PROJECT_ID  ,
    dataset: "production",
  },
  autoUpdates: true,
});
