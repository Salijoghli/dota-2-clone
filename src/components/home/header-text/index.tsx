import { Stack, Typography, Divider, Button, Box } from "@mui/material";
import steamLogo from "assets/images/steam-logo.svg";

import { styled } from "@mui/system";
import { RedSmallDivider } from "components/red-small-divider";

const SlideFromLeft = styled(Stack)(({ theme }) => ({
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
      zIndex={1}
      sx={{
        px: "10%",
      }}
      spacing={3}
    >
      <Typography
        variant="h2"
        letterSpacing={2}
        fontWeight={700}
        fontFamily={"serif"}
        color="rgba(239,240,241)"
        lineHeight={1}
        sx={{
          fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        }}
      >
        "A MODERN <br />
        MULTIPLAYER <br />
        MASTERPIECE.”
      </Typography>

      <Typography variant="body2" color="#818181" letterSpacing={1}>
        -DESTRUCTOID
      </Typography>
      <RedSmallDivider />

      <Button
        variant="outlined"
        color="inherit"
        sx={{
          display: "flex",
          gap: "10px",
          paddingLeft: 1.5,
          maxWidth: "215px",
          alignItems: "center",
          border: "2px solid",
          borderColor: "#818181",
          "&:hover": {
            position: "relative",
            top: "-.1rem",
          },
        }}
      >
        <Box
          component="img"
          src={steamLogo}
          alt="steam logo"
          width={23}
          height={23}
        />
        <Stack width="100%" height="100%">
          <Typography
            variant="body1"
            fontSize="1.1rem"
            letterSpacing={2}
            fontWeight={600}
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
      </Button>
    </SlideFromLeft>
  );
};
