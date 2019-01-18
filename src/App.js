import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ClickerContainer from './ClickerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='Wrapper' >
          <ErrorBoundary>
            <ClickerContainer/>
         </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
