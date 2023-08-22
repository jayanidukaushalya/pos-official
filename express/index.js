import express from "express";
import cors from "cors";
import { useAuthController } from "./controller/authController";

function startExpress() {
  const app = express();
  const port = 49183;

  app.use(cors());
  app.use(express.json());

  app.use("/", useAuthController);

  app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
  });
}

export { startExpress };
