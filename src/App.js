import './App.css';
import { AffineBreakOut} from './core';

function App() {
  const BreakOut = AffineBreakOut(21);
  return (
    <div className="App">
      <header className="App-header">
          {
              BreakOut.map((round, i) => (
                  <p><strong>Round {i}</strong>: {round.map((room) => <span>[{room.join(", ")}] </span>)}</p>
              ))
          }
      </header>
    </div>
  );
}

export default App;
