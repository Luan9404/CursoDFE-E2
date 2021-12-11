import React from "react";
import styles from './styles.module.scss'

export default class Card extends React.Component{

  render(){
    return(
      <div className={styles.cardBody}>
        <h2>{this.props.title}</h2>
        <h3>Autor: {this.props.author}</h3>
        <a href={this.props.url}><u>Clique aqui para acessar o livro</u></a>
      </div>
    )
  }
}