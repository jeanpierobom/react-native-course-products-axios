import React, { Component } from 'react';
import {
  ScrollView, Text
} from 'react-native';
import axios from 'axios'
import Itens from './Itens'

export default class ListaItens extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    console.log('Fazer alguma coisa antes de renderizar');
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => {
        console.log(response);
        this.setState({ listaItens: response.data });
      })
      .catch(() => { console.log('Erro ao recuperar os dados.'); });
  }

  componentDidMount() {
    console.log('Fazer alguma coisa depois de renderizar');
  }

  render() {
    console.log('Renderizando...');
    const teste = 'Este é um valor';
    console.log(teste);
    return (
      <ScrollView style={{ backgroundColor: '#ddd'}}>
        { this.state.listaItens.map((item) =>
            (<Itens key={item.titulo} item={item} />)
        )}
      </ScrollView>
    );
  }
}
