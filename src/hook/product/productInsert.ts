import { useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import { ProductUpdateContext } from "../../context/ProductUpdateContext";
import request from "../../config/axios";
import { AxiosResponse } from "../../types";

type Form = {
  name: string;
};

type UseProductProps = {
  handleClose: () => void;
  reset: () => void;
};

const useProductInsert = ({ reset, handleClose }: UseProductProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { handleNotify } = useContext(ProductUpdateContext);

  const onSubmit = async (data: Form) => {
    setIsLoading(true);
    try {
      const response = await request.post("/product/add", JSON.stringify(data));

      if (response.status == 201) {
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
    onSubmit,
    setIsError,
    setIsSuccess,
  };
};

export default useProductInsert;
