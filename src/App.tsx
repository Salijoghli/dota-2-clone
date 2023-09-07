import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Home from "./pages/home";
import Esports from "./pages/esports";
import Heroes from "./pages/heroes";
import News from "./pages/news";
import PreviousUpdates from "./pages/game/previous-updates";
import Patches from "./pages/game/patches";
import GameplayUpdates from "./pages/game/gameplay-updates";
import { Stack, Box } from "@mui/material";

const App = () => {
  return (
    <>
      {/* <Box
        width="100%"
        position="absolute"
        top={0}
        zIndex={1}
        sx={{
          backgroundColor: "rgba(0,0,0,0)",
        }}
      ></Box> */}
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="pastupdates" element={<PreviousUpdates />}></Route>
        <Route path="patches" element={<Patches />}></Route>
        <Route path="heroes" element={<Heroes />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="news/updates" element={<GameplayUpdates />}></Route>
        <Route path="esports" element={<Esports />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
    </>
  );
};

export default App;
