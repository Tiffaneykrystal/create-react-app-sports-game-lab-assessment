import React from "react";
import Game from "./components/game/Game";
import "./App.css";
import image1 from "./assets/images/detroit.jpg";
import image2 from "./assets/images/15017026_e7529dc74b_q.jpg";
import image3 from "./assets/images/raven.jpg";
import image4 from "./assets/images/bear.jpg";






function App(props) {
  const raccoons = {
    name: 'Detroit Punishers',
    logoSrc: image1,
  };

  const squirrels = {
    name: 'Battle Creek Beavers',
    logoSrc: image2,
  };

  const bunnies = {
    name: 'Canton Ravens',
    logoSrc: image3,
  };

  const hounds = {
    name: 'Brownstown Bears',
    logoSrc: image4,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}
export default App;
