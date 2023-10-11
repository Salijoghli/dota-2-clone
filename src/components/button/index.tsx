import { Link, Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

type MyButtonProps = {
  children: ReactNode;
  link: string;
};

export const MyButton = ({ children, link }: MyButtonProps) => {
  return (
    <MuiButton
      component={Link}
      href={link}
      size="large"
      color="inherit"
      variant="outlined"
      sx={{
        borderRadius: 1,
        fontSize: "20px",
        width: "240px",
        py: 2,
        px: 3,
        textTransform: "uppercase",
        color: "white",
        fontWeight: 700,
        borderColor: "rgb(80,80,80)",
        borderWidth: "3px",
        "&:hover": {
          borderColor: "rgb(172,78,65)",
          position: "relative",
          top: "-.1rem",
        },
      }}
    >
      {children}
    </MuiButton>
  );
};
