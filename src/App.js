import React from 'react';
import './App.css';
import { AffineBreakOut} from './core';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {groupSize: 25};
  }

  handleChange = (event) => {
      this.setState({groupSize: event.target.value});
  };

  handleSubmit = (event) => {
      this.setState({groupSize: this.state.groupSize});
      event.preventDefault();
  };

  render() {
    const BreakOut = AffineBreakOut((this.state.groupSize > 1) ? this.state.groupSize : 2);

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className="Search">
          <label>
            Your group size:
            <input type="number" value={this.state.groupSize} onChange={this.handleChange} size="3" min="2" max="121"/> (2-121)
          </label>
        </form>
        <div className="App-header">
          {
            BreakOut.map((round, i) => (
              <p>
                <strong>Round {i + 1}</strong>: {round.map((room) => <span>[{room.join(", ")}] </span>)}
              </p>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
