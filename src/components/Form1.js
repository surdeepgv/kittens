import React, {Component} from 'react';
import './Comp.css';
class Form1 extends Component {
  render() {
    return(
      <form className="form">
    <div className="uname"><b>Username</b></div>
    <div><input type="text" placeholder="Enter Username" name="uname" required /></div>

    <div className="pwd"><b>Password</b></div>
    <div><input type="password" placeholder="Enter Password" name="psw" required /></div>
      
      </form>
      );
  }
}
export default Form1;