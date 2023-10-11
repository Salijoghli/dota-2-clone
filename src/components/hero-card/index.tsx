import { Box, Typography, Stack, Link } from "@mui/material";
import strengthIcon from "assets/images/strength.png";
import agilityIcon from "assets/images/agility.png";
import intelligenceIcon from "assets/images/intelligence.png";
import universalIcon from "assets/images/universal.png";
import { ShadowBox } from "components/box-shadow";
import { Dota2Hero } from "utility/hero-types";

import "components/hero-card/style.css";

export type Size = "small" | "large";

type HeroCardProps = {
  hero: Dota2Hero;
  size?: Size;
};
export const HeroCard = ({ hero, size = "large" }: HeroCardProps) => {
  const { name, attribute, image } = hero;

  const getAttributeLogo = () =>
    attribute === "strength"
      ? strengthIcon
      : attribute === "agility"
      ? agilityIcon
      : attribute === "intelligence"
      ? intelligenceIcon
      : universalIcon;

  return (
    <Box
      component={Link}
      href={`/hero/${hero.name.replaceAll(" ", "")}`}
      className="hero-card"
      sx={{
        width: size === "small" ? "225px" : "255px",
        height: "130px",
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        transformOrigin: "left right",
        transition: "transform 0.2s ease",
        // boxShadow: "rgba(0, 0, 0, 0.35) 15px 15px 15px 5px",
      }}
    >
      <Box className="bottom-shadow" display="none" zIndex={-1}>
        <ShadowBox bottom={0} height="150px" direction="toTop" />
      </Box>
      <Box
        component={"img"}
        width="100%"
        height="100%"
        zIndex={1}
        src={image}
        alt="hero image"
        sx={{
          objectFit: "cover",
        }}
      />
      <Stack
        className="hero-details"
        flexDirection={"row"}
        py={1}
        alignItems="center"
        position="absolute"
        gap={"10px"}
        width="100%"
        color="white"
        zIndex={31}
      >
        <Box
          component="img"
          src={getAttributeLogo()}
          width="30px"
          height="30px"
        />
        <Typography
          fontWeight={600}
          variant="h5"
          textTransform={"uppercase"}
          fontFamily="serif"
          letterSpacing={"1px"}
          fontSize="25px"
          sx={{
            textShadow: "1px 1px black",
          }}
        >
          {name}
        </Typography>
      </Stack>
    </Box>
  );
};
