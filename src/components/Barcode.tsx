import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

type BarcodeProp = { barcode: string };

const Barcode = ({ barcode }: BarcodeProp) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      // Generate the barcode
      JsBarcode(barcodeRef.current, barcode, {
        format: "CODE128", // You can specify the barcode format you want
        width: 2, // Specify the width of the barcode bars
        height: 60, // Specify the height of the barcode
        displayValue: true, // Whether to display the value as text below the barcode
      });
    }
  }, [barcode]);
  return (
    <div>
      <svg ref={barcodeRef}></svg>
    </div>
  );
};

export default Barcode;
