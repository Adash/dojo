import React, { Component } from 'react';
import { createStore } from 'redux';
import './Clicker.css';

let switchLed = (state = 'led-gray', action)=>{
  switch(action.type){
    case 'FLIPIT' :
      return (state ==='led-gray' ? 'led-green' : 'led-gray')
    default :
      console.log('unregistered command');
  }
}

let store = createStore(switchLed);
//store.subscribe(() => console.log(store.getState()))

class ClickerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textField1: '',
      clicker: false,
      numClicks: 0,
      led: 'led-gray',
    }

    this.handleNewValueChange = this.handleNewValueChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.triggerAction = this.triggerAction.bind(this);

    this.textInput = React.createRef();
  }

  handleNewValueChange(event) {
    const value = event.target.value;
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: value,
    });
  }

  handleClick(){
    console.log(this.textInput.current);
    let curNumClicks = this.state.numClicks;
    this.setState({numClicks: curNumClicks + 1});
    this.textInput.current.focus();
  }

  triggerAction() {
    store.getState();
    //this.setState({led: (this.state.led ==='led-gray' ? 'led-green' : 'led-gray')});
    store.dispatch({ type: 'FLIPIT' });
  }

  render() {
    const {textValue} = this.state;
    const ledState = store.getState();
    return (
        <div className='ClickerWrapper'>
          <div className='col-3'>
            <input 
                className='mt-3'
                type='text' 
                name='textField' 
                value={textValue} 
                onChange={this.handleNewValueChange} 
                ref={this.textInput} 
            />
            <button 
              className='btn btn-outline-info m-2' 
              onClick={this.handleClick}
            >Click Me</button>
            <button 
              className='btn btn-outline-info m-2' 
              onClick={this.triggerAction}
              >Switch</button>
          </div>
          <div className='col-3'></div>
          <div className='col-3'>
            <div className={ledState}></div>
          </div>
        </div>
    )
  }
}

export default ClickerContainer;