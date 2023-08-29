import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const CurrencyFormat = React.forwardRef<NumericFormatProps, CustomProps>(
  function CurrencyFormat(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="Rs. "
        decimalScale={2}
        fixedDecimalScale={true}
        allowNegative={false}
        maxLength={22}
      />
    );
  }
);

const QuantityFormat = React.forwardRef<NumericFormatProps, CustomProps>(
  function QuantityFormat(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="PCS "
        decimalScale={0}
        fixedDecimalScale={true}
        allowNegative={false}
        maxLength={15}
      />
    );
  }
);

export { CurrencyFormat, QuantityFormat };
