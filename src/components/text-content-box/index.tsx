import { Link, Stack, Typography } from "@mui/material";
import { Button } from "components/button";
import { RedSmallDivider } from "components/red-small-divider";
import { motion } from "framer-motion";

type TextContentBox = {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export const TextContentBox = ({
  title,
  subTitle,
  description,
  buttonText,
  buttonLink,
}: TextContentBox) => {
  return (
    <Stack
      width="100%"
      alignItems="center"
      marginTop="-120px"
      spacing={7}
      textAlign="center"
      p={3}
    >
      <motion.div
        initial={{ opacity: 0.7, y: 50 }}
        whileInView={{ opacity: 1, y: -10 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Typography
          variant="h2"
          textTransform="uppercase"
          letterSpacing={1}
          lineHeight={1}
          fontWeight={600}
          fontFamily="sarif"
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
          fontFamily="sarif"
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "7rem" },
          }}
        >
          {subTitle}
        </Typography>
      </motion.div>
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
      <Button link={buttonLink}>{buttonText}</Button>
    </Stack>
  );
};
