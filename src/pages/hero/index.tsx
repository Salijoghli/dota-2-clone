import { Box, Typography, Stack } from "@mui/material";
import { Footer } from "components/footer";
import { Navbar } from "components/navbar";
import { useParams } from "react-router-dom";

type HeroParams = {
  heroName: string;
};

const Hero = () => {
  const { heroName } = useParams<HeroParams>();
  return (
    <Stack
      overflow="hidden"
      height="100vh"
      position="relative"
      justifyContent="center"
      sx={{
        background:
          "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg) no-repeat center top",
        backgroundSize: "auto",
      }}
    >
      <Box position="absolute" top={0} left={0} right={0}>
        <Navbar />
      </Box>
      <Typography
        variant="h1"
        textTransform="uppercase"
        letterSpacing={1}
        paddingBottom={5}
        textAlign="center"
        fontWeight={600}
        sx={{
          color: "fff",
          fontSize: { xs: "4rem", lg: "6rem" },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {heroName}
      </Typography>
      <Box position="absolute" bottom={0} left={0} right={0}>
        <Footer />
      </Box>
    </Stack>
  );
};

export default Hero;
