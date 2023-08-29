import { useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import request from "../../config/axios";
import { AxiosResponse } from "../../types";
import { Stock } from "../../components/Dialog/stock/AddNewStock";
import { StockUpdateContext } from "../../context/StockUpdateContext";
import { useParams } from "react-router-dom";

type UseStockProps = {
  handleClose: () => void;
  reset: () => void;
};

const useStockInsert = ({ reset, handleClose }: UseStockProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  const { handleNotify } = useContext(StockUpdateContext);

  const onSubmit = async (data: Stock) => {
    setIsLoading(true);

    const date = new Date(data.warranty);

    const formattedData = {
      ...data,
      buyingPrice: parseFloat(
        data.buyingPrice.replace("Rs. ", "").replace(/,/g, "")
      ),
      sellingPrice: parseFloat(
        data.sellingPrice.replace("Rs. ", "").replace(/,/g, "")
      ),
      qty: parseInt(data.qty.replace("PCS ", "").replace(/,/g, "")),

      warranty: `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`,
    };

    try {
      const response = await request.post(
        `/stock/add/${id}`,
        JSON.stringify(formattedData)
      );

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

export default useStockInsert;
