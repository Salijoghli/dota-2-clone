import { Box, Typography, Stack } from "@mui/material";
import strengthIcon from "assets/images/strength.png";
import agilityIcon from "assets/images/agility.png";
import intelligenceIcon from "assets/images/intelligence.png";
import universalIcon from "assets/images/universal.png";
import { ShadowBox } from "components/box-shadow";
import { Dota2Hero } from "utility/hero-types";
import "components/hero-card/style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <motion.div
      whileHover={{
        scale: 1.4,
        zIndex: 11,
      }}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        width: size === "small" ? "225px" : "255px",
        height: "130px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
      }}
    >
      <Link
        to={`/hero/${name.replaceAll(" ", "")}`}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          padding: "0 2",
        }}
        className="hero-card"
      >
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
          px={"auto"}
          alignItems="center"
          position="absolute"
          bottom={0}
          width="100%"
          gap={1}
          color="white"
          sx={{
            display: "none",
          }}
        >
          <ShadowBox height="200px" direction="toTop" />
          <Box
            component="img"
            src={getAttributeLogo()}
            width="28px"
            height="28px"
            zIndex={12}
          />
          <Typography
            fontWeight={600}
            variant="h6"
            textTransform={"uppercase"}
            fontFamily="sans-serif"
            fontSize="18px"
            zIndex={12}
          >
            {name}
          </Typography>
        </Stack>
      </Link>
    </motion.div>
  );
};
