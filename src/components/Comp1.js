import React, {Component} from 'react';
import 'tachyons';
class Comp1 extends Component {
  render() {
    let name=this.props.author;
    let sc="https://robohash.org/"+name+"?set=set4";
    return(
      <div className="grow bg-light-yellow did br3 pa3 ma2 bw2 shadow-5" >
        <img src={sc} height="200px" width="200px"/>
    <h2>{this.props.course}</h2>
    <p>{name}</p>
  
      </div>
      );
  }
}
export default Comp1;