import express from "express";
import { productInsertion } from "../validations/productInsertValidation";
import { validationMiddleware } from "../middleware/validationMiddleware";
import { iud, search } from "../config/connection";
import { checkProductDuplication } from "../middleware/checkProductDuplication";
import { pool } from "../config/connection";

const router = express.Router();

// product insertion

router.post(
  "/add",
  validationMiddleware(productInsertion),
  checkProductDuplication(),
  async (req, res) => {
    const name = req.body.name;

    const query = "INSERT INTO `product` (`name`) VALUES (?)";
    const array = [name];

    try {
      await iud(query, array);
      res.status(201).json({ message: "Product added successfully !" });
    } catch (error) {
      res.status(500).json({ message: "Database server error !" });
    }
  }
);

// product search

router.get("/search", async (_, res) => {
  const query = "SELECT * FROM `product` WHERE `status`=?";
  const array = [1];

  try {
    const [data] = await search(query, array);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

// product delete

router.put("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const query = "UPDATE `product` SET `status`=? WHERE `id`=?";
  const array = [0, id];

  try {
    await iud(query, array);
    res.status(200).json({ message: "Product deleted successfully !" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

//product update

router.put(
  "/update/:id",
  validationMiddleware(productInsertion),
  checkProductDuplication(),
  async (req, res) => {
    const { id } = req.params;
    const name = req.body.name;
    const query = "UPDATE `product` SET `name`=? WHERE `id`=?";
    const array = [name, id];

    try {
      await iud(query, array);
      res
        .status(200)
        .json({ message: "Product details updated successfully !" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Database server error !" });
    }
  }
);

//search products with pagination

router.get("/search/:count/:pagination", async (req, res) => {
  const { pagination, count } = req.params;
  const offset = (pagination - 1) * count;
  const query = `SELECT * FROM product WHERE status=1 LIMIT ${offset}, ${count}`;
  const array = [];

  try {
    const [data] = await search(query, array);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

//search specific product

router.get("/search/:id", async (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM product WHERE id=?";
  const array = [id];

  try {
    const [data] = await search(query, array);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

export { router as useProductController };
