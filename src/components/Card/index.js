import React from "react";

export default class Card extends React.Component{

  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
        <p>{this.props.url}</p>
      </div>
    )
  }
}