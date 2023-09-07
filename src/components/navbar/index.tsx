import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Drawer } from "../drawer-responsive";

import dota2Logo from "assets/images/dota2-logo.png";
import dota2LogoNoText from "assets/images/dota2-logo-noText.png";
import steamLogo from "assets/images/steam-logo.svg";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const navItems = ["game", "heroes", "news", "esports"];

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Stack
        direction="row"
        component="nav"
        zIndex={50}
        px={2}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* big logo */}
        <Link
          href={"/home"}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              width: "160px",
              minWidth: "160px",
              height: "50px",
              minHeight: "50px",
              backgroundImage: `url(${dota2Logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              opacity: ".8",
              "&:hover": {
                opacity: "1",
              },
            }}
          />
        </Link>
        {/* small logo */}
        <Link
          href={"/home"}
          sx={{
            display: { sm: "flex", md: "none" },
            opacity: ".8",
            "&:hover": {
              opacity: "1",
            },
          }}
        >
          <Box
            sx={{
              width: "50px",
              minWidth: "50px",
              height: "50px",
              minHeight: "50px",
              backgroundImage: `url(${dota2LogoNoText})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          />
        </Link>
        {/* links */}
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          {navItems.map((item) => (
            <Typography
              textTransform="uppercase"
              variant="body1"
              letterSpacing={1}
              fontWeight={600}
              fontFamily="sans-serif"
              key={item}
            >
              <Link
                variant="inherit"
                color="#CCCED0"
                href={`${item}`}
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {item}
              </Link>
            </Typography>
          ))}
        </Stack>
        {/* login select language and play buttons */}
        <Stack
          p={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Stack spacing={0.1} alignItems="flex-end" color="#CCCED0" p={1}>
            <Typography
              textTransform="uppercase"
              variant="body2"
              letterSpacing={1}
              fontWeight={600}
              fontFamily="sans-serif"
              fontSize="0.7rem"
            >
              <Link
                variant="inherit"
                color="#CCCED0"
                href={"https://steamcommunity.com/login/home/?goto="}
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                Login
              </Link>
            </Typography>
            <Button
              variant="text"
              color="inherit"
              sx={{
                m: 0,
                p: 0,
              }}
            >
              Select Language
            </Button>
          </Stack>

          <Button
            component={Link}
            href="https://steamcommunity.com/login/home/?goto="
            size="small"
            color="inherit"
            variant="outlined"
            sx={{
              borderRadius: 2,
              py: 1,
              px: 3,
              borderColor: "rgb(204,206,208)",
              letterSpacing: 2,
              display: { sm: "none", md: "none", lg: "flex" },
              "&:hover": {
                borderColor: "rgb(172,78,65)",
                position: "relative",
                top: "-.1rem",
              },
            }}
          >
            <Box
              component="img"
              src={steamLogo}
              alt="steam logo"
              width={25}
              height={25}
              sx={{
                paddingRight: 1,
              }}
            />
            Play for free
          </Button>
        </Stack>
        {/* responsive - div */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Drawer */}
      <Box component="nav">
        <Drawer
          isOpen={openDrawer}
          closeFn={(event) => {
            if (event.currentTarget.tagName === "BUTTON")
              setOpenDrawer((prev) => !prev);
          }}
        />
      </Box>
    </>
  );
};
