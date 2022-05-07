import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Customer } from './components/Customer';
import { CustomerForm } from './components/forms/CustomerForm';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/customers' component={Customer} />
        <Route path='/customerform/:id' component={CustomerForm} />
      </Layout>
    );
  }
}
