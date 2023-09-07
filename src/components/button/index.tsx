import { Link, Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  link: string;
};

export const Button = ({ children, link }: ButtonProps) => {
  return (
    <MuiButton
      component={Link}
      href={link}
      size="large"
      color="inherit"
      variant="outlined"
      sx={{
        borderRadius: 2,
        fontSize: "1.5rem",
        py: 2,
        px: 3,
        borderColor: "rgb(204,206,208)",
        letterSpacing: 2,
        display: { sm: "none", md: "none", lg: "flex" },
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
