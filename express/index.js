import express from "express";
import cors from "cors";
import { useAuthController } from "./controller/authController";
import { useProductController } from "./controller/productController";

function startExpress() {
  const app = express();
  const port = 49183;

  app.use(cors());
  app.use(express.json());

  app.use("/auth", useAuthController);
  app.use("/product", useProductController);

  app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
  });
}

export { startExpress };
