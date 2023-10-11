import { Stack, Typography, Box, styled } from "@mui/material";
import steamLogo from "assets/images/steam-logo.svg";
import { MyButton } from "components/button";

import { RedSmallDivider } from "components/red-small-divider";

const SlideFromLeft = styled(Stack)(() => ({
  zIndex: 1,
  animation: "slideFromLeft 2s ease",
  "@keyframes slideFromLeft": {
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
}));

export const HeaderText = () => {
  return (
    <SlideFromLeft
      spacing={1}
      sx={{
        px: { xs: "5%", md: "10%" },
        width: { xs: "100%", sm: "60%" },
      }}
    >
      <Typography
        variant="h2"
        letterSpacing={2}
        fontWeight={700}
        fontFamily={"serif"}
        color="rgba(239,240,241)"
        lineHeight={1}
        sx={{
          fontSize: { xs: "3rem", lg: "4rem" },
        }}
      >
        "A MODERN MULTIPLAYER MASTERPIECE.”
      </Typography>

      <Typography variant="body2" color="#818181" letterSpacing={1}>
        -DESTRUCTOID
      </Typography>

      <RedSmallDivider />

      <MyButton link="ss">
        <Stack
          width="100%"
          height="100%"
          flexDirection={"row"}
          alignItems="center"
          justifyContent={"space-between"}
          p={-1}
          m={-1}
          gap={1}
        >
          <Box
            component="img"
            src={steamLogo}
            alt="steam logo"
            width={23}
            height={23}
          />
          <Stack alignItems="center" justifyContent="center" p={0} m={0}>
            <Typography
              variant="body1"
              fontSize="1.1rem"
              letterSpacing={2}
              fontWeight={600}
              m={0}
              p={0}
            >
              PLAY FOR FREE
            </Typography>
            <Typography
              variant="body2"
              fontSize=".7rem"
              color="#818181"
              letterSpacing={1}
            >
              DOWNLOAD ON STEAM
            </Typography>
          </Stack>
        </Stack>
      </MyButton>
    </SlideFromLeft>
  );
};
