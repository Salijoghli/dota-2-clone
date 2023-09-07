import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import strengthIcon from "assets/images/strength.png";
import agilityIcon from "assets/images/agility.png";
import intelligenceIcon from "assets/images/intelligence.png";
import universalIcon from "assets/images/universal.png";
import { BoxShadow } from "components/box-shadow";
export type Dota2Heroes =
  | "abaddon"
  | "alchemist"
  | "ancient_apparition"
  | "anti_mage"
  | "arc_warden"
  | "axe"
  | "bane"
  | "batrider"
  | "beast_master"
  | "blood_seeker"
  | "bounty_hunter"
  | "brewmaster"
  | "bristleback"
  | "broodmother"
  | "centaur_warrunner"
  | "chaos_knight"
  | "chen"
  | "clinkz"
  | "clockwerk"
  | "crystal_maiden"
  | "dark_seer"
  | "dark_willow"
  | "dawnbreaker"
  | "dazzle"
  | "death_prophet"
  | "disruptor"
  | "doom"
  | "dragon_knight"
  | "drow_ranger"
  | "earth_spirit"
  | "earthshaker"
  | "elder_titan"
  | "ember_spirit"
  | "enchantress"
  | "enigma"
  | "faceless_void"
  | "grimstroke"
  | "gyrocopter"
  | "hoodwink"
  | "huskar"
  | "invoker"
  | "io"
  | "jakiro"
  | "juggernaut"
  | "keeper_of_the_light"
  | "kunkka"
  | "legion_commander"
  | "leshrac"
  | "lich"
  | "lifestealer"
  | "lina"
  | "lion"
  | "lone_druid"
  | "luna"
  | "lycan"
  | "magnus"
  | "marci"
  | "mars"
  | "medusa"
  | "meepo"
  | "mirana"
  | "monkey_king"
  | "muerta"
  | "morphling"
  | "nagasiren"
  | "furion"
  | "necrophos"
  | "night_stalker"
  | "nyx_assassin"
  | "ogre_magi"
  | "omniknight"
  | "oracle"
  | "outworld_destroyer"
  | "pangolier"
  | "phantom_assassin"
  | "phantom_lancer"
  | "phoenix"
  | "puck"
  | "pudge"
  | "pugna"
  | "primal_beast"
  | "queen_of_pain"
  | "razor"
  | "riki"
  | "rubick"
  | "sand_king"
  | "shadow_demon"
  | "shadow_fiend"
  | "shadow_shaman"
  | "silencer"
  | "skywrath_mage"
  | "slardar"
  | "slark"
  | "snap_fire"
  | "sniper"
  | "spectre"
  | "spirit_breaker"
  | "storm_spirit"
  | "sven"
  | "techies"
  | "templar_assassin"
  | "terrorblade"
  | "tidehunter"
  | "timbersaw"
  | "tinker"
  | "tiny"
  | "treant_protector"
  | "troll_warlord"
  | "tusk"
  | "underlord"
  | "undying"
  | "ursa"
  | "vengeful_spirit"
  | "venomancer"
  | "viper"
  | "visage"
  | "void_spirit"
  | "warlock"
  | "weaver"
  | "wind_ranger"
  | "winter_wyvern"
  | "witch_doctor"
  | "wraith_king"
  | "zeus";

export type Complexity = 1 | 2 | 3;

export type Attribute = "agility" | "strength" | "intelligence" | "universal";

export type Dota2Hero = {
  name: Dota2Heroes;
  backgroundImage: string;
  attribute: Attribute;
  complexity: Complexity;
};

type HeroCardProps = {
  hero: Dota2Hero;
};
export const HeroCard = ({ hero }: HeroCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, attribute, backgroundImage } = hero;
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
      sx={{
        width: 315,
        height: 180,
        display: "flex",
        maxHeight: 180,
        position: "relative",
        maxWidth: 315,
        cursor: "pointer",
        zIndex: 9,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "width 0.2s ease, height 0.3s ease",
        "&:hover": {
          transform: "scale(1.2)",
          zIndex: 10,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack
        flexDirection={"row"}
        alignSelf="end"
        gap={"10px"}
        width="100%"
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1,
          display: isHovered ? "flex" : "none",
        }}
      >
        <BoxShadow bottom={0} height="150px" direction="toTop" />

        <Box
          component="img"
          src={getAttributeLogo()}
          sx={{
            zIndex: 68,

            objectFit: "cover",
          }}
        />
        <Typography
          fontWeight={600}
          color="white"
          variant="h5"
          textTransform={"uppercase"}
          fontFamily="serif"
          sx={{
            zIndex: 68,
          }}
        >
          {name}
        </Typography>
      </Stack>
    </Box>
  );
};
