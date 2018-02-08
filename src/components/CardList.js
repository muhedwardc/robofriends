import React from 'react';
import Card from './Card';

const CardList = (props) => {

    const cardsArray = props.robots.map((robot, i) => {
        return <Card 
            key={props.robots[i].username}
            id={props.robots[i].id}
            name={props.robots[i].name}
            email={props.robots[i].email}
            username={props.robots[i].username}/>
    });

    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;