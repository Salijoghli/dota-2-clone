import { Box } from "@mui/material";

type BoxShadowProps = {
  top?: number;
  bottom?: number;
  height: string;
  direction?: "toTop" | "toBottom";
};

export const BoxShadow = ({
  top,
  bottom = 0,
  height,
  direction = "toBottom",
}: BoxShadowProps) => {
  return (
    <Box
      width="100%"
      height={height}
      position="absolute"
      left={0}
      right={0}
      bottom={bottom}
      top={top}
      zIndex={31}
      sx={{
        background:
          direction === "toTop"
            ? "-webkit-gradient(linear, left top, left bottom, color-stop(60%, rgba(0, 0, 0, 0)), color-stop(80%, rgba(0, 0, 0, 0.7)), color-stop(100%, rgb(0, 0, 0)))"
            : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgb(0, 0, 0)), color-stop(20%, rgba(0, 0, 0, 0.7)), color-stop(40%, rgba(0, 0, 0, 0.7)), color-stop(100%, rgba(0, 0, 0, 0)))",
      }}
    ></Box>
  );
};
