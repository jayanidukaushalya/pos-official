import express from "express";
import cors from "cors";
import { useAuthController } from "./controller/authController";
import { useProductController } from "./controller/productController";
import { useStockController } from "./controller/stockController";

function startExpress() {
  const app = express();
  const port = 49183;

  app.use(cors());
  app.use(express.json());

  app.use("/auth", useAuthController);
  app.use("/product", useProductController);
  app.use("/stock", useStockController);

  app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
  });
}

export { startExpress };
