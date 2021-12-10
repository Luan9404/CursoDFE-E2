import React from "react";
import BookCards from "./components/BookCards";
import { api } from "./utils/api";
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchKey: null,
      books: []
    }
    this.search = this.search.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  async search(){
    const {data} = await api.get(this.state.searchKey)
    this.setState({ books: data.hits})
  }
  
  handleInputChange({target}){
    this.setState({searchKey: target.value})
  }

  render(){
    const { books } = this.state
    return(
      <main>
        <h1>Book List</h1>
        <input type="text" onChange={this.handleInputChange}/>
        <button onClick={this.search}>Pesquisar</button>
        <BookCards books={books} />
      </main>
    )
  }
}