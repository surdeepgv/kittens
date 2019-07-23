import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
class App extends Component  {
  constructor(){
    super()
    this.state= {
      robots: robots,
      searchfield:''
    }
  }
  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
     }
    render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return(
    <div className="tc hi">
      <h1 className="f1">Kitten Friends</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll><CardList robots={filteredRobots}/></Scroll>
      
    </div>
  );
  }
}
  export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yukesh, Edit <code>src/App.js</code> and save to see the change.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>TEST!!!</h1>
      </header>
      
    </div>
  );
}*/

