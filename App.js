import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class App extends Component<{}> {
  render() {
    return (
      <ListaItens />
    );
  }
}
