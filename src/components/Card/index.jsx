import React from 'react';

const Card = (props) => {
	return (
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                <h4>{props.description}</h4>
                <p>{props.link}</p>
            </div>
        </div>
	)
}

export default Card;