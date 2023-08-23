import { colors, ListItem, Typography } from "@mui/material";

type ItemProps = {
  img: string;
  label: string;
  pathname?: boolean;
  handleEvent?: () => void;
};

const Item = ({ img, label, handleEvent, pathname }: ItemProps) => {
  return (
    <ListItem
      onClick={handleEvent}
      disablePadding
      sx={{
        gap: "10px",
        py: "20px",
        cursor: "pointer",
        paddingLeft: "30px",
        backgroundColor: pathname ? colors.grey[200] : undefined,
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: colors.grey[200],
        },
        "&:active": {
          backgroundColor: colors.grey[300],
        },
      }}
    >
      <img src={img} height={"24px"} />
      <Typography sx={{ color: pathname ? "#F26322" : colors.grey[800] }}>
        {label}
      </Typography>
    </ListItem>
  );
};

export default Item;
