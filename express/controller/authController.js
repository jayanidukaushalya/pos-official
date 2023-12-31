import express from "express";
import { userSchema } from "../validations/loginValidation";
import { validationMiddleware } from "../middleware/validationMiddleware";
import { search } from "../config/connection";

const router = express.Router();

router.post("/login", validationMiddleware(userSchema), async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query =
    "SELECT * FROM `user` WHERE `username` = ? AND `password` = ? AND `status` = 1";
  const array = [username, password];

  try {
    const [rows] = await search(query, array);

    if (rows.length === 0) {
      return res
        .status(401)
        .json({ message: "Invalid username or password !" });
    }

    if (rows.length === 1) {
      res.json({ message: "User logged successfully !", user: rows });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Database server error !" });
  }
});

router.get("/register", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: body });
});

export { router as useAuthController };
