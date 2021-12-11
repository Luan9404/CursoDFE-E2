import React from "react";
import styles from "./styles.module.scss"
import searchIcon from '../../assets/search.svg'

export default class SearchComponent extends React.Component{
  
  render(){
    return( 
      <div className={styles.searchItems}>
        <input 
          className={styles.searchInput} 
          type="text" 
          onChange={this.props.inputEvent}
        />
        <button 
          className={styles.searchButton} 
          onClick={this.props.searchEvent}
        >
          <img src={searchIcon} alt="Search icon" />
        </button>
      </div>      
    )
  }
}