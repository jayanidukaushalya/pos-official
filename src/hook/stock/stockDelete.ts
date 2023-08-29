import { useContext, useState } from "react";
import request from "../../config/axios";
import axios, { AxiosError } from "axios";
import { StockUpdateContext } from "../../context/StockUpdateContext";
import { AxiosResponse } from "../../types";
import { GridRowId } from "@mui/x-data-grid";

type UseStockProps = {
  handleClose: () => void;
  id: GridRowId | null;
};

const useStockDelete = ({ handleClose, id }: UseStockProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { handleNotify } = useContext(StockUpdateContext);

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await request.put(`/stock/delete/${id}`);

      if (response.status == 200) {
        setIsError(false);
        setIsSuccess(true);
        handleNotify();
        handleClose();
      }
    } catch (error) {
      setIsSuccess(false);
      if (axios.isAxiosError(error)) {
        console.log(error);
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

export { useStockDelete };
