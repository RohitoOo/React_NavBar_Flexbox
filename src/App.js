import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrapperComponent from './components/wrapperComponent'
import MenuComponent from './components/menuComponent'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'


class App extends Component {

  state = {
    SideDrawerOpen : false
  };

drawerToggleClickHandler = () => {

  this.setState( (prevState) => {
    return {SideDrawerOpen : !prevState.SideDrawerOpen}
  });

}


backDropClickHandler = () => {

    this.setState( {
      SideDrawerOpen : false
    })
}

  render() {
    // let sideDrawer;
    let backDrop;

if(this.state.SideDrawerOpen){
  // sideDrawer = <SideDrawer />
  backDrop = <BackDrop click={this.backDropClickHandler}/>
}

    return (
      <div style={{ height: '100%'}}>

          <Toolbar  drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.SideDrawerOpen} />
          {backDrop}
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
