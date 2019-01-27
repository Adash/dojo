import React, { Component } from "react";
import { createStore } from "redux";
import "./Clicker.css";

const initialState = {
  ledClass: 'led-yellow',
  todos: []
}

let ON = {type:'ON', text: 'whoo', class: 'led-green'};
let OFF = {type:'OFF', text: 'whoo', class: 'led-gray'};

function switchLed(state, action){
  if (typeof state === "undefined") {
    return initialState;
  }

  switch(action.type) {
    case ("ON") :
      return Object.assign({}, state, {ledClass: action.class} )
    case ("OFF") :
      return Object.assign({}, state, {ledClass: action.class} )
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
    const ledState = store.getState().ledClass;
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