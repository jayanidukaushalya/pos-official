import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:49183",
  headers: {
    "Content-Type": "application/json",
  },
});
