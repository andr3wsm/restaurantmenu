import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MyTopBar } from './components/myTopBar'
import { Button } from 'antd';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myMessage: null,
      pippo: null,
    };
  }
  async componentDidMount() {
    axios.get('/json')
    .then((res) => {
      this.setState({
        pippo: res.data.pippo,
      })
    })
  }
  render() {
    const myMessage = this.state.pippo;
    return (
      <div className="App">
        <Button> {myMessage} hnhh </Button>
      </div>
    );
  }
}

class AboutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myMessage: null,
      pippo: null,
    };
  }
  async componentDidMount() {
    axios.get('/about')
    .then((res) => {
      this.setState({
        pippo: res.data.pippo,
      })
    })
  }
  render() {
    const myMessage = this.state.pippo;
    return (
      <div className="App">
        <Button> {myMessage} </Button>
      </div>
    );
  }
}

export default function myApp() {
  return(
    <Router>
      <div>
        <nav>
          <MyTopBar>
          </MyTopBar>
        </nav>
        <Switch>
          <Route path="/"><App /></Route>
          <Route path="/about"><AboutApp /></Route>
          <Route path="/json">Json</Route>
        </Switch>
      </div>
    </Router>
  )
};