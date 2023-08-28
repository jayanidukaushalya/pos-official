import { search } from "../config/connection";

const checkProductDuplication = () => async (req, res, next) => {
  const name = req.body.name;

  const query = "SELECT * FROM `product` WHERE `name` = ?";
  const array = [name];

  try {
    const [data] = await search(query, array);

    if (data.length > 0) {
      return res.status(400).json({ message: "Duplicate entry !" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Database server error !" });
  }

  next();
};

export { checkProductDuplication };
