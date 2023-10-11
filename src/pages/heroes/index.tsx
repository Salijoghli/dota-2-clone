import { Stack, Typography, Box } from "@mui/material";
import { Footer } from "components/footer";
import { Navbar } from "components/navbar";

import filterStrengthImg from "assets/images/filter-strength.png";
import filterAgilityImg from "assets/images/filter-agility.png";
import filterIntelligenceImg from "assets/images/filter-intelligence.png";
import filterUniversalImg from "assets/images/filter-universal.png";
import filterComplexityImg from "assets/images/filter-complexity.png";
import { Attribute, Complexity } from "utility/hero-types";
import SearchIcon from "@mui/icons-material/Search";
import { CustomTextField } from "components/custom-textfield";
import { useState } from "react";
import { HeroCards } from "components/hero-cards";

import { dota2Heroes } from "utility/hero-data";
import { AnimatePresence } from "framer-motion";

const sortedHeroes = dota2Heroes.sort((hero1, hero2) =>
  hero1.name > hero2.name ? 1 : hero2.name > hero1.name ? -1 : 0
);

const images = {
  strength: filterStrengthImg,
  agility: filterAgilityImg,
  intelligence: filterIntelligenceImg,
  universal: filterUniversalImg,
};

const complexities = ["1", "2", "3"];

const Heroes = () => {
  const [selectedAttribute, setSelectedAttribute] = useState<Attribute | null>(
    null
  );
  const [selectedComplexity, setSelectedComplexity] =
    useState<Complexity | null>(null);
  const [heroName, setHeroName] = useState("");
  // const [filtered, setFiltered] = useState(sortedHeroes);

  const toggleAttributeFilter = (attribute: any) => {
    if (heroName !== "") return;
    if (selectedAttribute === attribute) {
      setSelectedAttribute(null);
    } else {
      setSelectedAttribute(attribute);
    }
  };

  const toggleComplexityFilter = (complexity: any) => {
    if (heroName !== "") return;
    if (selectedComplexity === complexity) {
      setSelectedComplexity(null);
    } else {
      setSelectedComplexity(complexity);
    }
  };

  const handleHeroNameFilter = (name: string) => {
    if (name === "") {
      // When the input is empty, reapply the previous filters
      setHeroName(name);
      // Apply the previous attribute filter
      if (selectedAttribute !== null) {
        setSelectedAttribute(selectedAttribute);
      }
      // Apply the previous complexity filter
      if (selectedComplexity !== null) {
        setSelectedComplexity(selectedComplexity);
      }
    } else {
      // When the user starts typing, clear any active filters
      setSelectedAttribute(null);
      setSelectedComplexity(null);
      setHeroName(name);
    }
  };

  const filteredHeroes = sortedHeroes.filter((hero) => {
    if (selectedAttribute && hero.attribute !== selectedAttribute) {
      return false;
    }

    if (selectedComplexity !== null && hero.complexity !== selectedComplexity) {
      return false;
    }

    if (heroName && !hero.name.toLowerCase().includes(heroName.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundImage:
          "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <Stack
        paddingTop={8}
        component={"main"}
        width="90%"
        margin="auto"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          marginBottom: { xs: 4, md: 6 },
        }}
      >
        <Stack
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Typography
            variant="h3"
            fontFamily={"serif"}
            letterSpacing={2}
            fontWeight={600}
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "3rem" },
            }}
          >
            CHOOSE YOUR HERO
          </Typography>
          <Typography
            width="100%"
            maxWidth="1000px"
            variant="h6"
            letterSpacing={1}
            fontWeight={400}
            lineHeight={1}
            sx={{
              fontSize: { xs: "18px", sm: "22px" },
              color: "#ddd",
            }}
          >
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </Typography>
        </Stack>
      </Stack>

      <Box
        display="flex"
        width="100%"
        margin="auto"
        alignItems="center"
        px={2}
        borderRadius={2}
        gap={2.5}
        sx={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))",
          height: { xs: "250px", md: "78px" },
          boxShadow: "0px 0px 30px rgba(0,0,0,.3137254902)",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          maxWidth: { md: "1000px", lg: "1150px" },
        }}
      >
        <Typography
          textTransform={"uppercase"}
          variant="body1"
          letterSpacing={2}
          sx={{
            display: { xs: "block", md: "none", lg: "block" },
          }}
        >
          filter heroes
        </Typography>

        <Box display={"flex"} alignItems="center" gap="20px">
          <Typography
            variant="body1"
            letterSpacing={2}
            textTransform={"uppercase"}
            color="#808FA6"
          >
            attribute
          </Typography>
          <Box display={"flex"}>
            {Object.entries(images).map(([attribute, img]) => {
              return (
                <Box
                  key={attribute}
                  width={"44px"}
                  height={"34px"}
                  component="img"
                  src={img}
                  onClick={() => toggleAttributeFilter(attribute as Attribute)}
                  alt={`filter ${attribute}`}
                  sx={{
                    cursor: "pointer",
                    opacity: selectedAttribute === attribute ? "1" : "0.5",
                  }}
                />
              );
            })}
          </Box>
        </Box>

        <Box display={"flex"} alignItems="center" gap="20px">
          <Typography
            variant="body1"
            letterSpacing={2}
            textTransform={"uppercase"}
            color="#808FA6"
          >
            complexity
          </Typography>
          <Box display={"flex"}>
            {complexities.map((complexity) => {
              return (
                <Box
                  key={complexity}
                  width={"44px"}
                  height={"34px"}
                  component="img"
                  src={filterComplexityImg}
                  onClick={() =>
                    toggleComplexityFilter(complexity as unknown as Complexity)
                  }
                  alt={`filter ${complexity}`}
                  sx={{
                    cursor: "pointer",
                    opacity: selectedComplexity === complexity ? "1" : "0.5",
                  }}
                />
              );
            })}
          </Box>
        </Box>

        <Box
          width="250px"
          height="50px"
          bgcolor={"rgb(37,40,42)"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <SearchIcon
            fontSize="large"
            sx={{
              opacity: "0.5",
            }}
          />
          <CustomTextField
            value={heroName}
            onChange={(e) => handleHeroNameFilter(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        paddingTop={2}
        paddingBottom={6}
        display="flex"
        flexWrap="wrap"
        width="100%"
        maxWidth="1200px"
        margin="auto"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <AnimatePresence>
          <HeroCards cardSize="small" cards={filteredHeroes} />
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
};

export default Heroes;
