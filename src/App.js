
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  pageSize=20;
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       <Switch>
       <Route exact path="/">
          <Newsitem pageSize={this.pageSize} category="science" country="us" />
          </Route>
       
          <Route exact path="/science">
          <Newsitem pageSize={this.pageSize}key="science" category="science" country="us" />
          </Route>
          <Route exact path="/sports">
          <Newsitem pageSize={this.pageSize}key="sports" category="sports" country="us" />
          </Route>
          <Route exact path="/entertainment">
          <Newsitem pageSize={this.pageSize}key="entertainment" category="entertainment" country="us" />
          </Route>
          <Route exact path="/business">
          <Newsitem pageSize={this.pageSize}key="business" category="business" country="us" />
          </Route>
          <Route exact path="/general">
          <Newsitem pageSize={this.pageSize}key="general" category="general" country="us" />
          </Route>
          <Route exact path="/health">
          <Newsitem pageSize={this.pageSize}key="health" category="health" country="us" />
          </Route>
          <Route exact path="/technology">
          <Newsitem pageSize={this.pageSize}key="technology" category="technology" country="us" />
          </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}






