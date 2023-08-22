import { object, string } from "yup";

const userSchema = object({
  username: string().required("Username is required !"),
  password: string().required("Password is required !"),
});

export { userSchema };
