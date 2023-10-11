import { Box, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      component="footer"
      width="100%"
      minHeight="180px"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#000",
      }}
    >
      <Stack
        width="500px"
        marginTop={3}
        spacing={3}
        alignItems="center"
        justifyContent={"center"}
      >
        <Box
          display="flex"
          width="360px"
          gap="40px"
          alignSelf="center"
          justifyContent="space-around"
        >
          <Box
            component="img"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
            maxHeight="30px"
          />
          <Box
            component="img"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
            maxHeight="30px"
          />
        </Box>
        <Typography
          variant="body1"
          fontSize="0.9rem"
          textAlign="center"
          marginTop={0}
          color="#777"
          fontFamily={"serif"}
          width="100%"
          sx={{
            whiteSpace: "wrap",
            maxWidth: { xs: "300px", sm: "90%" },
          }}
        >
          Dota and the Dota logo are trademarks and/or registered trademarks of
          Valve Corporation. 2023 Valve Corporation, all rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};
