import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ThankYou from './ThankYou';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "test@test.com"
    }
  }

  onChange = (event) => {
    this.setState({ email: event.target.value });
    console.log('onchange:', this.state.email)
  }

  onSubmit = (event) => {
    console.log('onSubmit: ', this.state)
    fetch('http://localhost:64575/api/prospects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(() => {
      ReactDOM.render(
        <ThankYou/>, document.getElementById('root'));
    })
    .catch(err => alert(err))
  }

  render() {
    return (

      <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        top: '150px'
      }}>
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text" value={this.state.email} onChange={this.onChange}/>
        </div>
        <div>
             <button type="submit">Submit</button>
         </div>
         </form>
      </div>

    );

  }
} 
