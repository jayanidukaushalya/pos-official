import { colors, ListItem, Typography } from "@mui/material";

type ItemProps = {
  img: string;
  label: string;
  handleEvent: () => void;
};

const Item = ({ img, label, handleEvent }: ItemProps) => {
  return (
    <ListItem
      onClick={handleEvent}
      disablePadding
      sx={{
        gap: "10px",
        py: "20px",
        paddingLeft: "30px",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: colors.grey[200],
          cursor: "pointer",
        },
        "&:active": {
          backgroundColor: colors.grey[300],
        },
      }}
    >
      <img src={img} height={"24px"} />
      <Typography sx={{ color: colors.grey[800] }}>{label}</Typography>
    </ListItem>
  );
};

export default Item;
