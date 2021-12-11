import React from "react";
import Card from "../Card";
import styles from './styles.module.scss'
export default class BookCards extends React.Component{
 
  render(){
    const { books } = this.props;

    return(
      <div className={styles.booksContainer}>
        {books.map((book, key) => {
          return (
            <Card
              key={key}
              title={book.title}
              author={book.author}
              url={book.url} 
            />
          )
        })}
      </div>
    )
  }
}