import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { CardList } from "./components/cardList/CardList.component";
import { SearchBox } from "./components/searchBox/SearchBox.component";

class App extends Component {
  state = {
    pokemons: [],
    searchField: "",
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => ({
          pokemons: users,
        }));
      });
  }

  handleSearchInputChange = (e) => {
    this.setState(() => ({
      searchField: e.target.value,
    }));
  };
  render() {
    const { pokemons, searchField } = this.state;
    const filteredMonsters = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleSearchInputChange}
        />
        <CardList pokemons={filteredMonsters} />
      </div>
    );
  }
}

export default App;
