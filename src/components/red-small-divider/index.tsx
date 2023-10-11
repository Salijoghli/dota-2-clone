import { Divider } from "@mui/material";

export const RedSmallDivider = () => {
  return (
    <Divider
      sx={{
        backgroundColor: "rgb(255,96,70)",
        borderRadius: 2,
        maxWidth: "75px",
        width: "100%",
        borderBottomWidth: "3px",
        zIndex: 31,
      }}
    />
  );
};
