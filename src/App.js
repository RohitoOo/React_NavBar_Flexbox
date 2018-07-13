import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrapperComponent from './components/wrapperComponent'
import MenuComponent from './components/menuComponent'
import Toolbar from './components/Toolbar/Toolbar'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Toolbar/>
          <main style={{
            marginTop: '60px'
          }}>

                <p>This is the page content</p>

          </main>


      </div>
    );
  }
}

export default App;
