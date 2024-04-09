import { useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  console.log(searchField);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();

    setSearchField(searchString);
  };

  const filterMonsters = monsters.filter(monster => {
    return monster.name.toLocaleLowerCase().includes(searchString);
  });

  return (
    <div className="App">
      <h1 className="app-title">Cats Rolodox</h1>
      <SearchBox
        onSearchHandler={onSearchChange}
        placeholder="Search monsters"
        className="search-box"
      />
      <CardList 
        monsters={ filterMonsters }
      />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(
//         () => {
//           return { monsters: users, filterMonsters: users};
//         }))
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return  { searchString };
//     });
//   }

//   render() {

//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Cats Rolodox</h1>
//         <SearchBox onSearchHandler={ onSearchChange } placeholder="Search monsters" className='search-box'/>
//         <CardList monsters={ filterMonsters }/>

//       </div>
//     );
//   }

// }

export default App;
