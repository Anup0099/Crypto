import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Coin from "./Coin";
function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  useEffect(() => {
    Axios
      .get('https://api.coinstats.app/public/v1/coins?skip=0')
      .then((response) => {
        setListOfCoins(response.data.coins);
      });
  });
  const filterCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <header className="cryptoHeader">
        <input
          placeholder="Bitcoin..."
          type="text"
          onChange={(e) => {
            setsearchWord(e.target.value);
          }}
        />
      </header>
      <div className="cryptoDisplay">
        {filterCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,0L160,160L240,96L320,256L400,224L480,256L560,96L640,128L720,192L800,224L880,96L960,224L1040,224L1120,64L1200,64L1280,192L1360,256L1440,64L1440,320L1360,320L1280,320L1200,320L1120,320L1040,320L960,320L880,320L800,320L720,320L640,320L560,320L480,320L400,320L320,320L240,320L160,320L80,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;
