import { Box, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      component="footer"
      width="100%"
      m="auto"
      minHeight="180px"
      textAlign={"center"}
      alignItems="center"
      justifyContent="center"
      color="black"
      spacing={3}
      sx={{
        backgroundColor: "red",
      }}
    >
      <Box display="flex" gap="40px">
        <Typography>logo1</Typography>
        <Typography>logo2</Typography>
      </Box>
      <Typography maxWidth="50%" width="100%" variant="body2">
        Dota and the Dota logo are trademarks and/or registered trademarks of
        Valve Corporation. 2023 Valve Corporation, all rights reserved.
      </Typography>
    </Stack>
  );
};
