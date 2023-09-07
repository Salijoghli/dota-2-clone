import { Box, Typography, Stack, Button as MuiButton } from "@mui/material";
import { Navbar } from "components/navbar";
import { HeaderText } from "components/home/header-text";
import { BackgroundVideo } from "components/home/background-video";
import { LatestNews } from "components/home/latest-news";
import { Footer } from "components/footer";

import ancientsDesktop from "assets/images/radiant-dire-desktop.jpg";
import heroes from "assets/images/heroes.jpg";
import ancientsMobile from "assets/images/radiant-dire-mobile.jpg";
import { TextContentBox } from "components/text-content-box";
import { BoxShadow } from "components/box-shadow";
import { HeroCard } from "components/hero-card";
import { styled } from "@mui/system";

const AnimatedCard = styled(Box)(({ theme }) => ({
  animation: "slideIn",
  animationDuration: "60s",
  animationDirection: "normal",
  animationDelay: "0s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  "@keyframes slideIn": {
    "0%": {
      transform: "translateX(0px)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
}));

const Home = () => {
  return (
    <Box overflow={"hidden"} height="100%">
      <BackgroundVideo />
      <Box position="absolute" top={0} left={0} right={0} zIndex={3}>
        <Navbar />
      </Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        height="75vh"
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
      >
        <HeaderText />
        <BoxShadow bottom={0} height="100px" direction="toTop" />
      </Box>
      <LatestNews />

      <Box
        position="relative"
        sx={{
          overflow: "hidden",
          zIndex: -1,
          marginTop: "-130px",
          width: "100%",
          height: "570px",
        }}
      >
        <BoxShadow bottom={0} height="500px" direction="toTop" />
        <BoxShadow top={0} height="400px" direction="toBottom" />

        <Box
          sx={{
            backgroundImage: `url(${ancientsDesktop})`,
            display: { xs: "none", md: "block" },
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "0.7",
          }}
        />
        <Box
          sx={{
            backgroundImage: `url(${ancientsMobile})`,
            display: { xs: "block", md: "none" },
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "0.7",
          }}
        />
      </Box>
      <TextContentBox
        title="join now"
        subTitle="battle of the ancients"
        buttonText="see what's new"
        description="Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now."
        buttonLink="news"
      />

      <Box
        position="relative"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "1500px",
            backgroundImage: `url(${heroes})`,
            backgroundSize: "3500px",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            opacity: "0.7",
          }}
        >
          <BoxShadow bottom={0} height="200px" direction="toTop" />
        </Box>
        <BoxShadow top={0} height="400px" direction="toBottom" />
        <Box marginTop="-400px">
          <TextContentBox
            title="who will you"
            subTitle="choose"
            buttonText="view all heroes"
            buttonLink="heroes"
            description="From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory."
          />
        </Box>
      </Box>
      <Stack
        width="80%"
        spacing={1}
        position="relative"
        overflow="hidden"
        mx={"auto"}
        sx={{
          maskImage: `linear-gradient(
          to right,
          transparent 0%,
          black 20%,
          black 80%,
          transparent 100%
        )`,
        }}
      >
        <AnimatedCard
          display="flex"
          gap={"10px"}
          sx={{
            whiteSpace: "no-wrap",
            width: "10000px",
          }}
        ></AnimatedCard>
      </Stack>

      <Footer />
    </Box>
  );
};

export default Home;
