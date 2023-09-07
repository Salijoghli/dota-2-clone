import { Stack, Box, Typography, Button } from "@mui/material";
import { NewsCard } from "components/news-card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    backgroundImage:
      "https://clan.cloudflare.steamstatic.com/images/3703047/3728d0dc0f78d43a27b431f8b5607ee31ca0987d.png",
    cardDate: new Date(2023, 7, 31),
    title: "The summer client update",
    text: "Summer is hurtling toward its inevitable, pumpkin spiced end, and we’re seeing it off in style with a whole bunch of pretty sweet quality of life improvements.",
  },
  {
    backgroundImage:
      "https://clan.cloudflare.steamstatic.com/images/3703047/16f18c0e3db93cf0de1d674427325397e89ff4aa.png",
    cardDate: new Date(2023, 7, 19),
    title: "The international 2023 ticket sale",
    text: "The International is fast approaching, and for those of you planning on going, we wanted to give you some important dates so you can start planning your trip.",
  },
  {
    backgroundImage:
      "https://clan.cloudflare.steamstatic.com/images/3703047/6e70042d518c9ef41230861320ff8d7312232f95.png",
    cardDate: new Date(2023, 7, 18),
    title: "10-year anniversary celebration",
    text: "There are some elders who whisper that the Ancients have always existed, and always will exist -- unknowable eldritch tentacle-shards of a mad moon, outside of time, doomed to...",
  },
];

export const LatestNews = () => {
  const navigate = useNavigate();

  return (
    <Stack
      // maxWidth={"90vw"}
      width="100%"
      margin="auto"
      marginTop={"-50px"}
      spacing={1}
      zIndex={5}
      px={1}
      sx={{
        opacity: 1,
      }}
    >
      <Box
        width="100%"
        maxWidth="400px"
        alignSelf="center"
        display="flex"
        gap={"20px"}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          textTransform="uppercase"
          letterSpacing={1}
          sx={{
            opacity: "0.9",
          }}
          variant="body2"
          fontSize="0.8rem"
        >
          Latest News
        </Typography>

        <Button
          color="inherit"
          size="small"
          variant="text"
          endIcon={<ArrowForwardIcon />}
          disableTouchRipple
          onClick={() => navigate("/news")}
          sx={{
            fontSize: "0.9rem",
            opacity: "0.6",
            "&:hover": {
              transform: "scale(1.1,1)",
              transformOrigin: "left",
            },
          }}
        >
          View all
        </Button>
      </Box>
      <Box
        display="flex"
        maxWidth={"100%"}
        width="100%"
        margin="auto"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        gap={"20px"}
      >
        {cards.map((card, index) => (
          <NewsCard key={index} {...card} />
        ))}
      </Box>
    </Stack>
  );
};
