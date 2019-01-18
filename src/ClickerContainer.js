import React, { Component } from 'react';

class ClickerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textField1: '',
      clicker: false,
      numClicks: 0,
    }

    this.handleNewValueChange = this.handleNewValueChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

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

  render() {
    const {textValue} = this.state;
    return (
        <div className='col-3'>
          <input 
              className='mt-3'
              type='text' 
              name='textField' 
              value={textValue} 
              onChange={this.handleNewValueChange} 
              ref={this.textInput} 
          />
          <button className='btn btn-outline-info m-2' onClick={this.handleClick}>Click Me</button>
        </div>
    )
  }
}

export default ClickerContainer;