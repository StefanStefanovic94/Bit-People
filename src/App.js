import React from 'react';
import Header from './components/Header/Header'
import { FetchCandidates } from './services/Services'
import MainList from './components/MainList/MainList';
import Search from './components/Search/Search'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      persons: [],
      view: true,
      filterPersons: []
    }
  }


  refresh = () => {
    FetchCandidates("https://randomuser.me/api/?results=15").then((person) =>
      this.setState({
        persons: person.results,
        filterPersons:person.results
      })
    );
  }

  changeView = () => {
    this.setState({
      view: !this.state.view
    })
  }

  componentDidMount() {
    this.refresh()
  }

  searchPeople = (textInput) => {
    const newPersons=this.state.persons.filter((person)=>{
      return person.name.first.toLowerCase().includes(textInput.toLowerCase()) ||
       person.name.last.toLowerCase().includes(textInput.toLowerCase())
    })
    this.setState({
      filterPersons:newPersons
    })
  }
    







render(){
  return (
    <div className="App">
      <Header changeView={this.changeView} view={this.state.view} refresh={this.refresh} />
      <Search searchPeople={this.searchPeople}/>
      <MainList view={this.state.view} persons={this.state.filterPersons} users={this.state.persons}/>
    </div>
  );
}
}
export default App;
