import React from 'react';
import './index.css';


const Card = (props) => {
    const { id, name, email } = props;
    return (
      <div className="card box">
        <img alt="" src={`https://robohash.org/${id}?set=set5 `} />
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    );
  };

export default Card;