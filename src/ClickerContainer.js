import React, { Component } from "react";
import { createStore } from "redux";
import "./Clicker.css";

let ON = {type:'ON', text: 'whoo'};
let OFF = {type:'OFF', text: 'whoo'};

function switchLed(state, action){
  if (typeof state === "undefined") {
    return "led-gray";
  }
  switch(action.type) {
    case ("ON") :
      console.log(action.type);
      return "led-green"
    case ("OFF") :
      console.log(action.type);
      return "led-gray"
    default:
      return "no state";
  }
};


let store = createStore(switchLed);
//store.subscribe(() => console.log(store.getState()))

class ClickerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textField: "",
      clicker: false,
      numClicks: 0,
      led: "led-gray"
    };

    this.handleNewValueChange = this.handleNewValueChange.bind(this);
    this.triggerAction = this.triggerAction.bind(this);
    this.handleClick = this.handleClick.bind(this);

    //this.textInput = React.createRef();
  }

  handleNewValueChange(event) {
    const value = event.target.value;
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: value
    });
  }

   handleClick() {
     //console.log(this.textInput.current);
     let curNumClicks = this.state.numClicks;
     this.setState({ numClicks: curNumClicks + 1 });
     console.log(this.state.numClicks);
     //this.textInput.current.focus();
    }

  triggerAction(Action) { 
    //console.log(store.getState())
    store.dispatch(Action);
    this.forceUpdate()
  }

  render() {
    const { textValue } = this.state;
    const ledState = store.getState();
    return (
      <div className="ClickerWrapper">
        <div className="col-3">
          <input
            className="mt-3"
            type="text"
            name="textField"
            value={textValue}
            onChange={this.handleNewValueChange}
            ref={this.textInput}
          />

          <button
            className="btn btn-outline-primary m-2"
            onClick={this.handleClick}
          >
            Count
          </button>
          <button
            className="btn btn-outline-info m-2"
            onClick={()=>this.triggerAction(ON)}
          >
            On
          </button>
          <button
            className="btn btn-outline-info m-2"
            onClick={()=>this.triggerAction(OFF)}
          >
            Off
          </button>
        </div>
        <div className="col-3" />
        <div className="col-3">
          <div className={ledState} />
          <div className={ledState} />
          <div className={ledState} />
        </div>
      </div>
    );
  }
}

export default ClickerContainer;