import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-container">

                <div className="desc">
                    <img src={props.image} alt="" />
                    <h4 className="title">{props.title}</h4>
                    <h5 className="authors">{props.authors}</h5>
                    <p className="description">{props.description}</p>
                    <p className="link">{props.link}</p>
                </div>

            </div>
        </div >
    )
}

export default Card;