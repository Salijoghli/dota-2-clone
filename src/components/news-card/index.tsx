import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export type NewsCardProps = {
  backgroundImage: string;
  cardDate: Date;
  title: string;
  text: string;
};

export const NewsCard = ({
  backgroundImage,
  cardDate,
  title,
  text,
}: NewsCardProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = cardDate.toLocaleDateString("en-US", options);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        maxHeight: 400,
        maxWidth: 400,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderBottom: "0.5px solid #9FA6AA",
        transition: "all ease 500ms",
        "&:hover": {
          transform: "scale(1.03)",
          borderBottomColor: "rgb(255,96,70)",
          boxShadow:
            "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        component="img"
        src={backgroundImage}
        alt="card-logo"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          opacity: isHovered ? "0.5" : "1",
          boxShadow: "5px 5px 0 0 rgb(0, 0, 0), 0 0 5px 5px rgb(0, 0, 0)",
        }}
      />
      {/* add shadow on bottom */}
      <Box
        sx={{
          width: "100%",
          bottom: 0,
          height: "100%",
          position: "absolute",
          background:
            "linear-gradient(rgba(19, 23, 28, 0) 60%, rgba(19, 23, 28, 0.733) 70%, rgb(19, 23, 28) 90%)",
        }}
      />
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        width="100%"
        px={2}
        sx={{
          transition: "max-height 1s ease",
          textAlign: "left",
          maxHeight: isHovered ? "none" : "3.6em",
        }}
      >
        <Typography fontWeight={600} color="#9FA6AA" variant="body2">
          {date}
        </Typography>
        <Typography
          textTransform="capitalize"
          fontWeight={600}
          variant="h6"
          fontFamily="serif"
        >
          {title}
        </Typography>
        <Box
          sx={{
            overflowX: isHovered ? "auto" : "unset",
          }}
        >
          <Typography
            variant="body2"
            lineHeight={1}
            sx={{
              color: "#9FA6AA",
              py: 1,
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
