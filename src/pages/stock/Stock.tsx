import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/Card";
import request from "../../config/axios";
import StockLayout from "../../layout/Stock";
import { Link } from "react-router-dom";
import { STOCK } from "../../routes/path";

type Product = {
  id: number;
  name: string;
  status: number;
};

const Stock = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { data },
        } = await request.get("product/search");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <StockLayout>
      <Grid container>
        {products.map((item, key) => {
          return (
            <Grid key={key} item xs={3}>
              <Link
                style={{ textDecoration: "none" }}
                to={`${STOCK}/${item.id}`}
              >
                <Card description="Test" title={item.name} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </StockLayout>
  );
};

export default Stock;
