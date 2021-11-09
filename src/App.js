import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
    
  }, [])

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr/>
      {loading ? <strong>Loading...</strong> : 
      <select>
        {coins.map((coin) => (
            <option>{coin.name} ({coin.symbol}) : ({coin.quotes.USD.price})USD</option>
        ))}
      </select>}
      
    </div>
  );
}

export default App;
