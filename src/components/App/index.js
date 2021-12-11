import React from "react";
import BookCards from "../BookCards";
import SearchComponent from "../SearchComponent";
import { api } from "../../utils/api";
import styles from "./styles.module.scss"

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
    const {data} = await api.get(this.state.searchKey);
    this.setState({ books: data.hits});
  }
  
  handleInputChange({target}){
    this.setState({searchKey: target.value});
  }

  render(){
    const { books } = this.state;

    return(
      <main className={styles.main}>
        <h1>Book List</h1>
        <SearchComponent 
          inputEvent={this.handleInputChange} 
          searchEvent={this.search} 
        />
        <BookCards books={books} />
      </main>
    )
  }
}