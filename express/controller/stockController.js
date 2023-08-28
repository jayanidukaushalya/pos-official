import express from "express";
import { iud, search } from "../config/connection";
import { validationMiddleware } from "../middleware/validationMiddleware";

const router = express.Router();

router.get("/search/:id", async (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM stock WHERE product_id=?";
  const array = [id];

  try {
    const [data] = await search(query, array);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

export { router as useStockController };
