import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

type DatePickerProps = {
  label: string;
};

const DatePicker = ({ label }: DatePickerProps) => {
  return (
    <DemoContainer components={["DatePicker"]}>
      <MUIDatePicker label={label} />
    </DemoContainer>
  );
};

export default DatePicker;
