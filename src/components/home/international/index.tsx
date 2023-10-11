import { Box, Stack, Typography } from "@mui/material";
import { RedSmallDivider } from "components/red-small-divider";

export const International = () => {
  return (
    <Box
      width="100%"
      position="relative"
      height="800px"
      my={20}
      display="flex"
      flexDirection="column"
      justifyContent={"flex-end"}
      alignItems="center"
      sx={{
        backgroundPosition: "center, center",
        backgroundSize: "1500px",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg)",
      }}
    >
      <Stack width="100%" alignItems="center" spacing={2}>
        <Box
          width="100px"
          component="img"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg"
        />
        <Typography
          variant="h2"
          textTransform="uppercase"
          letterSpacing={1}
          lineHeight={1}
          fontWeight={600}
          fontFamily="serif"
          color="rgb(130,126,120)"
        >
          the
        </Typography>
        <Typography
          variant="h1"
          textTransform="uppercase"
          letterSpacing={1}
          fontWeight={600}
          lineHeight={1}
          fontFamily="serif"
          width="100%"
          maxWidth="fit-content"
          textAlign="center"
          sx={{
            fontSize: { xs: "4rem", md: "5rem", lg: "7rem" },
          }}
        >
          dota pro circuit
        </Typography>
        <RedSmallDivider />
        <Typography
          variant="h5"
          textAlign={"center"}
          color="#e2dace"
          sx={{
            opacity: "0.9",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            width: { xs: "90%", md: "70%" },
          }}
        >
          When not climbing the ranks, you'll be able to learn from the best.
          The Dota Pro Circuit features ultra-high-level Dota 2 competition
          streaming regularly in the game client, on Twitch and Steam.TV.
          Culminating in the largest e-sports championship in the world, The
          International, professional Dota 2 is an event not to be missed.
        </Typography>
      </Stack>
    </Box>
  );
};
