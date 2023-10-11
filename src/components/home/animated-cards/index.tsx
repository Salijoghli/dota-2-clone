import { Box, styled } from "@mui/material";

export const AnimatedCards = styled(Box)(() => ({
  width: "calc(255px * 50)",
  display: "flex",
  animation: "to-left 140s infinite linear 0s",
  gap: "10px",
  zIndex: 4,

  "@keyframes to-left": {
    "0%": {
      transform: "translateX(0px)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
}));
