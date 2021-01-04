import React, { Component} from 'react'
import '../assets/jss/LoginPage.css'

class LoginPage extends Component {
    
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handle change")
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">
          Name:
          <input id="name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label for="mdp">
          Mot de passe:
          <input id="mdp" type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
export default LoginPage