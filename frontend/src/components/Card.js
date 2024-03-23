import React from 'react';

export default function Card(props) {
  return (
  <div>
    <div className="container">
      <div className="card">
        <div className="card--timestamp">{props.item.timestamp}
        </div>
        <img className="card--img" src={props.item.pfpImg} alt="icon"/>
        <div>
          <h3 className="card--h3">{props.item.title}</h3>
          <p className="card--p">{props.item.description}</p>
        </div>
      </div>
    </div>
    <hr className="b" height="0.5px" align="right"></hr>
  </div>
  )
}