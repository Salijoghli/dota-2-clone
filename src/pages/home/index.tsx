import { Box, Stack, Typography } from "@mui/material";
import { Navbar } from "components/navbar";
import { HeaderText } from "components/home/header-text";
import { BackgroundVideo } from "components/home/background-video";
import { LatestNews } from "components/home/latest-news";
import { Footer } from "components/footer";

import ancientsDesktop from "assets/images/radiant-dire-desktop.jpg";
import heroes from "assets/images/heroes.jpg";
import ancientsMobile from "assets/images/radiant-dire-mobile.jpg";

import { AnimatedTextContent } from "components/animated-text-content";
import { ShadowBox } from "components/box-shadow";
import { AnimatedCards } from "components/home/animated-cards";

import { dota2Heroes } from "utility/hero-data";
import { HeroCards } from "components/hero-cards";
import { MyButton } from "components/button";
import { RedSmallDivider } from "components/red-small-divider";
import { International } from "components/home/international";

//get random heroes from the array
const shuffled = dota2Heroes.sort(() => 0.5 - Math.random());

const generateRowCardsCopy = (start: number, end: number) => {
  const slicedHeroes = shuffled.slice(start, end);
  return [...slicedHeroes, ...slicedHeroes];
};

const Home = () => {
  return (
    <Box overflow={"hidden"} height="100%">
      <BackgroundVideo />
      <Box position="absolute" top={0} left={0} right={0} zIndex={3}>
        <Navbar />
      </Box>
      {/* Header Section */}
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
        <ShadowBox bottom={0} height="100px" direction="toTop" />
      </Box>
      <LatestNews />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "570px",
          overflow: "hidden",
          zIndex: -1,
          marginTop: "-130px",
        }}
      >
        <ShadowBox top={0} height="300px" direction="toBottom" />
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${ancientsMobile})`,
              md: `url(${ancientsDesktop})`,
            },
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "0.7",
          }}
        />
      </Box>
      {/* join now section */}
      <Box display={"flex"} flexDirection={"column"} alignItems="center">
        <AnimatedTextContent
          title="join now"
          subTitle="battle of the ancients"
          description="Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now."
        />
        <MyButton link="news">see what's new</MyButton>
      </Box>
      {/* heroes Section */}
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
          <ShadowBox bottom={0} height="200px" direction="toTop" />
        </Box>
        <ShadowBox top={0} height="400px" direction="toBottom" />
        <Box
          marginTop="-400px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <AnimatedTextContent
            title="who will you"
            subTitle="choose"
            description="From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory."
          />
          <MyButton link="heroes">View all heroes</MyButton>
        </Box>
      </Box>
      {/* heroes cards section */}
      <Stack
        width="80%"
        spacing={1.5}
        position="relative"
        overflow="hidden"
        mx={"auto"}
        zIndex={3}
        my={4}
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
        <AnimatedCards>
          <HeroCards cards={generateRowCardsCopy(0, 25)} />
        </AnimatedCards>
        <AnimatedCards
          sx={{
            animationDuration: "178s",
            animationDirection: "reverse",
          }}
        >
          <HeroCards cards={generateRowCardsCopy(25, 50)} />
        </AnimatedCards>
        <AnimatedCards
          sx={{
            animationDuration: "168s",
          }}
        >
          <HeroCards cards={generateRowCardsCopy(50, 75)} />
        </AnimatedCards>
        <AnimatedCards
          sx={{
            animationDuration: "135s",
            animationDirection: "reverse",
          }}
        >
          <HeroCards cards={generateRowCardsCopy(75, 100)} />
        </AnimatedCards>
        <AnimatedCards
          sx={{
            animationDuration: "127s",
            width: "calc(255px * 48)",
          }}
        >
          <HeroCards cards={generateRowCardsCopy(100, 124)} />
        </AnimatedCards>
      </Stack>
      <International />
      <Box
        width="100%"
        height="450px"
        sx={{
          backgroundImage:
            "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/background4.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Stack
          p={"10%"}
          justifyContent="center"
          maxWidth="fit-content"
          textTransform="uppercase"
          height="100%"
          spacing={2}
        >
          <Typography
            variant="h2"
            color="rgb(80,80,80)"
            lineHeight={0.5}
            letterSpacing={2}
            fontWeight={700}
            width="100%"
            fontFamily={"sans-serif"}
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem" },
            }}
          >
            join the
          </Typography>
          <Typography
            variant="h1"
            lineHeight={0.8}
            fontWeight={700}
            letterSpacing={2}
            fontFamily={"sans-serif"}
            sx={{
              fontSize: { xs: "3rem", sm: "5rem", md: "7rem" },
            }}
          >
            battle
          </Typography>
          <RedSmallDivider />
          <MyButton link={"https://store.steampowered.com/app/570/Dota_2/"}>
            play free now
          </MyButton>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
