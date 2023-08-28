import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

const Footer = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Box
      sx={{ display: "flex", py: "20px", gap: "20px", alignItems: "center" }}
    >
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
      <Stack spacing={2}>
        <FormControl size="small">
          <InputLabel id="rows-per-page-label">Rows per page</InputLabel>
          <Select
            sx={{
              width: "150px",
            }}
            labelId="rows-per-page-label"
            id="rows-per-page"
            value={rowsPerPage}
            label="Rows per page"
            onChange={(event) => {
              setRowsPerPage(parseInt(String(event.target.value)));
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>50</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};
