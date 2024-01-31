import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: "1234"
        },
        {
          name: 'Frank',
          id: "1734"
        },
        {
          name: 'Jacky',
          id: "1239"
        },
        {
          name: 'Andrei',
          id: "1236"
        },
        {
          name: 'Ionut',
          id: "7234"
        },
      ]
    }
  }

  render() {

    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.name}>
                <h1>{monster.name}</h1>
              </div>
          })
        }
      </div>
    );
  }

}

export default App;
