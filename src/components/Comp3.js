import React, {Component} from 'react';
import './Comp.css';


class Comp3 extends Component {
  render() {
    return(<div className="card">
    <h4>Course Name : {this.props.course}</h4>
    <p>Author : {this.props.author}</p>
    <p>Price : {this.props.price}</p>
      </div>);
  }
}

export default Comp3;