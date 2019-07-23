import React from 'react';
import './Style.css';
import 'tachyons';
const Card =(props) =>{
    const{name,id}=props;
  
    
    let sc="https://robohash.org/"+id+"?set=set4";
    return(
      <div className="tc grow bg-light-yellow dib br3 pa3 ma2 bw2 shadow-5" >
        <img alt="robots" src={sc} height="150px" width="150px"/>
   <div>
    <h2>{name}</h2>
    </div>
      </div>
      );
  }

export default Card;