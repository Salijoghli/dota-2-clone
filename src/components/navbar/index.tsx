import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Drawer } from "../drawer-responsive";
import steamLogo from "assets/images/steam-logo.svg";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { MyButton } from "components/button";
import LanguageIcon from "@mui/icons-material/Language";
import { Logo } from "./logo";

const NAV_Items = ["heroes", "news", "esports"];
const GAME_Items = [
  { link: "patches", text: "patches" },
  { link: "news/updates", text: "gameplay updates" },
  { link: "pastupdates", text: "previous updates" },
];

const LANGUAGES = [
  "English",
  "Español - España (Spanish - Spain)",
  "Français (French)",
  "Italiano (Italian)",
  "Deutsch (German)",
  "Ελληνικά (Greek)",
  "한국어 (Korean)",
  "简体中文 (Simplified Chinese)",
  "繁體中文 (Traditional Chinese)",
  "Русский (Russian)",
  "ไทย (Thai)",
  "日本語 (Japanese)",
  "Português (Portuguese)",
  "Português - Brasil (Portuguese - Brazil)",
  "Polski (Polish)",
  "Dansk (Danish)",
  "Nederlands (Dutch)",
  "Suomi (Finnish)",
  "Norsk (Norwegian)",
  "Svenska (Swedish)",
  "Čeština (Czech)",
  "Magyar (Hungarian)",
  "Română (Romanian)",
  "Български (Bulgarian)",
  "Türkçe (Turkish)",
  "Українська (Ukrainian)",
  "Tiếng Việt (Vietnamese)",
  "Español - Latinoamérica (Spanish - Latin America)",
];

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isGameHovered, setIsGameHovered] = useState(false);
  const [isLanguagesHovered, setIsLanguagesHovered] = useState(false);
  return (
    <>
      <Stack
        direction="row"
        component="nav"
        zIndex={50}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: { xs: "30px", sm: "25px" },
        }}
      >
        <Logo />

        {/* links */}
        <Stack
          direction="row"
          spacing={3}
          position="relative"
          alignItems="center"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Button
            color="inherit"
            size="small"
            onClick={() => setIsGameHovered((prev) => !prev)}
            endIcon={
              <ArrowDropDownIcon
                sx={{
                  width: "25px",
                  height: "25px",
                }}
              />
            }
            onMouseEnter={() => setIsGameHovered(true)}
            onMouseLeave={() => setIsGameHovered(false)}
            sx={{
              opacity: "0.7",
              fontSize: { sm: "1rem", md: "1.4rem" },
              letterSpacing: 2,
              px: 2,

              transition: "background 0.3s",
              fontFamily: "sans-serif",
              fontWeight: 600,
              "&:hover": {
                opacity: 1,
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
              },
            }}
          >
            Game
          </Button>
          {isGameHovered && (
            <Stack
              position="absolute"
              left={-31}
              zIndex={4}
              bottom={-90}
              spacing={1}
              p={1}
              px={2}
              textTransform={"uppercase"}
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={() => setIsGameHovered(true)}
              onMouseLeave={() => setIsGameHovered(false)}
            >
              {GAME_Items.map((gameItem) => {
                return (
                  <Link
                    href={`/${gameItem.link}`}
                    underline="none"
                    color="inherit"
                    variant="body2"
                    letterSpacing="2px"
                    fontFamily={"sans-serif"}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateX(10px)",
                      },
                    }}
                  >
                    {gameItem.text}
                  </Link>
                );
              })}
            </Stack>
          )}
          {NAV_Items.map((item) => (
            <Link
              variant="h6"
              textTransform="uppercase"
              letterSpacing={1}
              fontWeight={600}
              fontFamily="sans-serif"
              key={item}
              color="#CCCED0"
              href={`${item}`}
              underline="none"
              sx={{
                fontSize: { sm: "1rem", md: "1.4rem" },
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {item}
            </Link>
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
          <Stack spacing={0.1} color="#CCCED0" p={1}>
            <Link
              textTransform="uppercase"
              variant="body2"
              letterSpacing={1}
              fontWeight={600}
              fontFamily="serif"
              color="#CCCED0"
              href={"https://steamcommunity.com/login/home/?goto="}
              underline="none"
              sx={{
                textAlign: { sm: "center", lg: "right" },
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Login
            </Link>
            <Button
              variant="text"
              color="inherit"
              startIcon={<LanguageIcon />}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                m: 0,
                p: 0,
                fontFamily: "serif",
              }}
              onMouseEnter={() => setIsLanguagesHovered(true)}
              onMouseLeave={() => setIsLanguagesHovered(false)}
              onClick={() => setIsLanguagesHovered((prev) => !prev)}
            >
              Select Language
            </Button>
          </Stack>

          {/* languages */}
          {isLanguagesHovered && (
            <Stack
              zIndex={12}
              width="310px"
              spacing={0.3}
              position="absolute"
              top={"60px"}
              py={2}
              bgcolor={"#222"}
              textAlign="left"
              onMouseEnter={() => setIsLanguagesHovered(true)}
              onMouseLeave={() => setIsLanguagesHovered(false)}
              sx={{
                border: "1px solid #888",
                right: { sm: 10, lg: "16%" },
              }}
            >
              {LANGUAGES.map((language) => (
                <Link
                  variant="body2"
                  width="100%"
                  textTransform={"uppercase"}
                  fontFamily="serif"
                  color="#999"
                  px={2}
                  underline="none"
                  href={`/home?|=${language}`}
                  sx={{
                    fontSize: "0.6rem",
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "#fff",
                      color: "#000",
                    },
                  }}
                >
                  {language}
                </Link>
              ))}
            </Stack>
          )}
          <Box
            sx={{
              display: { sm: "none", lg: "block" },
            }}
          >
            <MyButton link="https://steamcommunity.com/login/home/?goto=">
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                <Box
                  component="img"
                  src={steamLogo}
                  alt="steam logo"
                  width={25}
                  height={25}
                />
                <Typography variant="h6" lineHeight={1}>
                  play for free
                </Typography>
              </Stack>
            </MyButton>
          </Box>
        </Stack>
        {/* responsive - div */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon
            sx={{
              fontSize: "3.5rem",
              opacity: "0.7",
              "&:hover": {
                opacity: "1",
              },
            }}
          />
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
