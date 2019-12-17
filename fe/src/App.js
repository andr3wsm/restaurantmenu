import React, { Component } from 'react';
import { MyTopBar } from './components/myTopBar'
import { Menu, Icon, Button } from 'antd';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myMessage: "ciao",
    };
  }
  async componentDidMount() {
    axios.get('/')
    .then((res) => {
      this.setState({
        myMessage: res.data.myMessage,
      })})
  }
  render() {
    const myMessage = this.state.myMessage;
    return (
      <div className="App">
        <Button> {myMessage} hnhh </Button>
      </div>
    );
  }
}

export default App;