import { Box } from "@mui/material";
export const BackgroundVideo = () => {
  return (
    <Box height="75vh">
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          width: "100vw",
          objectFit: "cover",
          opacity: "0.5",
          height: "100%",
          zIndex: "-1",
        }}
      >
        <Box
          component="source"
          type="video/mp4"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
        />
      </Box>
    </Box>
  );
};
