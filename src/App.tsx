import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Esports from "./pages/esports";
import Heroes from "./pages/heroes";
import News from "./pages/news";
import PreviousUpdates from "./pages/game/previous-updates";
import Patches from "./pages/game/patches";
import GameplayUpdates from "./pages/game/gameplay-updates";
import Hero from "pages/hero";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/pastupdates" element={<PreviousUpdates />}></Route>
        <Route path="/patches" element={<Patches />}></Route>
        <Route path="/heroes" element={<Heroes />}></Route>
        <Route path="/hero/:heroName" element={<Hero />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/news/updates" element={<GameplayUpdates />}></Route>
        <Route path="/esports" element={<Esports />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
    </div>
  );
};

export default App;
