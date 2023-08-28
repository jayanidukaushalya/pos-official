import { object, string } from "yup";

const schema = object({
  name: string()
    .required("Product Name is required !")
    .max(45, "Product name must not exceed 45 characters !"),
});

export { schema as productInsertion };
