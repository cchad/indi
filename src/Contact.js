import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Binder} from 'react-bind';
import ThankYou from './ThankYou';
import {Link, NavLink} from 'react-router-dom';

var state;

class Contact extends Component {
  constructor() {
    super();
    this.binder = new Binder(this);
    this.bind = this.binder.bind;
    this.state = {
      email: "xx"
    }
    this
      .binder
      .setModel(this.state.model);
    state = this.state;
  }

  onSubmit = (event) => {
    fetch('http://localhost:64575//api/prospects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.email)
    })

    ReactDOM.render(
      <ThankYou/>, document.getElementById('root'));
  }
	updateValue(modifiedValue){
		this.setState({
			value:modifiedValue
		})
  }
  
	getInitialState(){
		return{
			value:'My Value'
		}
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
        <div>
          <InputBox1 value = {this.state.value}/>

        </div>π∏
        <div>
             <button onClick={this.onSubmit}>Submit</button>
         </div>
      </div>

    );

    var InputBox1 = React.createClass({
      update:function(){
        var modifiedValue=this.refs.inputValue.getDOMNode().value;
        this.props.updateValue(modifiedValue);
      },
      render:function(){
        return (<input type="text" ref="inputValue" value={this.props.value} onChange={this.update} />)
      }
    });

  }
} 

export default Contact