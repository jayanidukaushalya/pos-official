import { BarChart } from "@mui/x-charts";
import data from "./data";

const chartSetting = {
  height: 380,
};

const valueFormatter = (value: number) => `Rs ${value}`;

const Bars = () => {
  return (
    <BarChart
      dataset={data}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "london", label: "London", valueFormatter },
        { dataKey: "paris", label: "Paris", valueFormatter },
        { dataKey: "newYork", label: "New York", valueFormatter },
        { dataKey: "seoul", label: "Seoul", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
};

export default Bars;
