import React, { Component} from 'react'
import '../assets/jss/LoginPage.css'

class LoginPage extends Component {
    
  constructor(props) {
    super(props);
    this.state = {name: '', mdp: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handle change")
    this.setState({name: event.target.name, mdp: event.target.mdp});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name +' ' + 
    'password : ' + this.state.mdp);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="name">
            Name:
            <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label for="mdp">
            Mot de passe:
            <input id="mdp" name="mdp" type="password" value={this.state.mdp} onChange={this.handleChange} />
          </label>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
      
    );
  }

}
export default LoginPage