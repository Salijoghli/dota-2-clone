import { Typography, Box } from "@mui/material";
import { RedSmallDivider } from "components/red-small-divider";

export type TextContentProps = {
  title: string;
  subTitle: string;
  description: string;
};

export const TextContent = ({
  title,
  subTitle,
  description,
}: TextContentProps) => {
  return (
    <Box>
      <Typography
        variant="h2"
        textTransform="uppercase"
        letterSpacing={1}
        lineHeight={1}
        fontWeight={600}
        fontFamily="serif"
        color="rgb(130,126,120)"
      >
        {title}
      </Typography>
      <Typography
        variant="h1"
        textTransform="uppercase"
        letterSpacing={1}
        fontWeight={600}
        lineHeight={1}
        fontFamily="serif"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "7rem" },
        }}
      >
        {subTitle}
      </Typography>
      <RedSmallDivider />
      <Typography
        variant="h5"
        width="100%"
        color="#e2dace"
        sx={{
          opacity: "0.9",
          fontWeight: "100",
          maxWidth: "80%",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
