import dota2Logo from "assets/images/dota2-logo.png";
import dota2LogoNoText from "assets/images/dota2-logo-noText.png";
import { Box, Link } from "@mui/material";

export const Logo = () => {
  return (
    <Link
      href={"/home"}
      zIndex={3}
      sx={{
        display: { xs: "block", sm: "none", md: "block", lg: "block" },
        marginRight: "40px",
        opacity: ".8",
        "&:hover": {
          opacity: "1",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "50px", lg: "200px" },
          minWidth: { xs: "50px", lg: "200px" },
          height: "50px",
          minHeight: "50px",
          backgroundImage: {
            xs: `url(${dota2LogoNoText})`,
            lg: `url(${dota2Logo})`,
          },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
    </Link>
  );
};
