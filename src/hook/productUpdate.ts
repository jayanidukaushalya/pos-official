import { useContext, useState } from "react";
import { ProductUpdateContext } from "../context/ProductUpdateContext";
import request from "../config/axios";
import axios, { AxiosError } from "axios";
import {
  AxiosResponse,
  UseProductProps,
} from "../components/Dialog/productTypes";

type Form = {
  name: string;
};

const useProductUpdate = ({ reset, handleClose, id }: UseProductProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { handleNotify } = useContext(ProductUpdateContext);

  const onSubmit = async (data: Form) => {
    setIsLoading(true);
    try {
      const response = await request.put(
        `/product/update/${id}`,
        JSON.stringify(data)
      );

      if (response.status == 200) {
        console.log(response.data.message);
        setIsError(false);
        setIsSuccess(true);
        reset();
        handleNotify();
        handleClose();
      }
    } catch (error) {
      setIsSuccess(false);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<AxiosResponse>;
        const errorMessage = axiosError?.response?.data?.message;

        if (errorMessage) {
          setErrorMessage(errorMessage?.toString());
        } else {
          setErrorMessage("An unknown error occurred.");
        }
      } else {
        console.log("Non-Axios error occurred:", error);
        setErrorMessage("An unexpected error occurred.");
      }
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    setIsError,
    setIsSuccess,
    onSubmit,
  };
};

export default useProductUpdate;
