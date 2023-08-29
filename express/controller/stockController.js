import express from "express";
import { iud, search } from "../config/connection";
import { validationMiddleware } from "../middleware/validationMiddleware";
import { stockInsertion } from "../validations/stockInsertion";
import crypto from "crypto";

const router = express.Router();

router.get("/search/:id", async (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM `stock` WHERE `product_id`=? AND `status`=?";
  const array = [id, 1];

  try {
    const [data] = await search(query, array);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

router.post(
  "/add/:id",
  validationMiddleware(stockInsertion),
  async (req, res) => {
    const { id } = req.params;

    const date = new Date();
    let barcode = crypto.randomUUID().split("-")[0];

    console.log(barcode);
    console.log(req.body.warranty);

    const query =
      "INSERT INTO `stock` (`product_id`, `bprice`, `sprice`, `qty`, `warranty`, `register_date`, `barcode`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const array = [
      id,
      req.body.buyingPrice,
      req.body.sellingPrice,
      req.body.qty,
      req.body.warranty,
      date,
      barcode,
    ];

    try {
      await iud(query, array);
      res.status(201).json({ message: "Stock added successfully !" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Database server error !" });
    }
  }
);

router.put("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const query = "UPDATE `stock` SET `status`=? WHERE `id`=?";
  const array = [0, id];

  try {
    await iud(query, array);
    res.status(200).json({ message: "Stock deleted successfully !" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

export { router as useStockController };
