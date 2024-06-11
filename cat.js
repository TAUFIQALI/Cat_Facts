//https://github.com/TAUFIQALI/Cat_Facts.git

import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchNewFact = () => {
    fetch('https://catfact.ninja/facts')
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setCurrentIndex(0);
      });
  };

  useEffect(() => {
    fetchNewFact();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Cat Fact</h1>
          <p>Fact: {data[currentIndex].fact}</p>
          <button onClick={() => setCurrentIndex((currentIndex + 1) % data.length)}>
            Next Fact
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
