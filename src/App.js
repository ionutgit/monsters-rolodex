import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterMonsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return { monsters: users, filterMonsters: users};
        }), 
        () => {
          console.log(this.state);
        })
  }

  render() {

    return (
      <div className="App">
        <input
          className='search=box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();

            let fM = this.state.monsters.filter(monster => {
              // console.log();
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => { return  {filterMonsters : fM }; });
          }} 
        />
        {
          this.state.filterMonsters.map((monster) => {
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
