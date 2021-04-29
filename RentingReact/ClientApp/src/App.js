import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/pages/Home';
import Register from './components/pages/RegisterPage';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
     
      <Layout>
              <Route exact path='/' component={Home} />

              <Route exact path='/register' component={Register}/>

      </Layout>
    );
  }
}
