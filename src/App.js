import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
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
    console.log('render');

    const filterMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="App">
        <input
          className='search=box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();

            this.setState(() => { 
              return  { searchString }; 
            });
          }} 
        />
        {
          filterMonsters.map((monster) => {
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
