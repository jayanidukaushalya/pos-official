import { useEffect, useState } from "react";
import request from "../../config/axios";
import { Grid, Typography } from "@mui/material";
import StockLayout from "../../layout/Stock";
import { useParams } from "react-router-dom";
import StockTable from "../../components/table/StockTable";

type Stock = {
  id: number;
  product_id: number;
  bprice: number;
  sprice: number;
  qty: number;
  warranty: Date;
  register_date: Date;
  status: number;
};

export const Item = () => {
  const { id } = useParams();
  const [stock, setStock] = useState<Stock[]>([]);
  const [product, setProduct] = useState("");

  const fetchStock = async () => {
    try {
      const {
        data: { data },
      } = await request.get(`stock/search/${id}`);

      const formattedData = data.map((item: Stock) => ({
        ...item,
        warranty: new Date(item.warranty),
        register_date: new Date(item.register_date),
      }));

      setStock(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = async () => {
    try {
      const {
        data: { data },
      } = await request.get(`product/search/${id}`);

      setProduct(data[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStock();
    fetchProduct();
    console.log(product);
  }, []);

  return (
    <StockLayout>
      <Grid container gap={"10px"}>
        <Grid item xs={12} px={"5px"}>
          <Typography sx={{ color: "#F26322", fontWeight: 700, opacity: 0.8 }}>
            Product Name: {product}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <StockTable stock={stock} />
        </Grid>
      </Grid>
    </StockLayout>
  );
};
