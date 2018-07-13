import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrapperComponent from './components/wrapperComponent'
import MenuComponent from './components/menuComponent'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'


class App extends Component {
  render() {
    return (
      <div style={{ height: '100%'}}>

          <Toolbar/>
            <SideDrawer/>
              <BackDrop/>
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
