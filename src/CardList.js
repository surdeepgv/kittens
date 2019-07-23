import React from 'react';
import Card from './Card';
import './Style.css';

const CardList=({robots}) =>{
    const cardComponent=robots.map((user,i) => {
        return <Card key={i}
        id={robots[i].id}
         name={robots[i].name}/>
    }
    )
    return(
        <div className="align" >
{cardComponent}
</div>
    );
}
export default CardList;