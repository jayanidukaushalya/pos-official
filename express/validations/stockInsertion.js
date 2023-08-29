import { object, number, date } from "yup";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const schema = object({
  buyingPrice: number().required().positive(),
  sellingPrice: number().required().positive(),
  qty: number().required().positive().integer(),
  warranty: date().min(tomorrow),
});

export { schema as stockInsertion };
