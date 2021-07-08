import React, { Component } from 'react';
import {StyleSheet, FlatList, Text, View } from 'react-native';

import api from '../../services/api';


export default class App extends Component {
  constructor(props) {
    super(props);
    listaConsultas: []
  }

  componentDidMount(){
    this.buscarConsultas();
  }

  buscarConsultas = async () =>{
    api.get('/consulta').then(respostaApi => this.setState(this.listaConsultas = respostaApi.data))
    console.log(this.listaConsultas)
  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.mainBodyContent}
          data={this.listaConsultas}
          keyExtractor={item => item.idConsulta}
          renderItem={this.renderItem}        
        />
      </View>
    )
  }

  renderItem = ({item}) => (
    <View style={styles.consulta}>
      <Text style={styles.text}>{item.idPacienteNavigation.rg}</Text>
      <Text style={styles.text}>{item.idPacienteNavigation.idadePaciente}</Text>
      <Text style={styles.text}>{item.idPacienteNavigation.telefone}</Text>
      <Text style={styles.text}>{item.idMedicoNavigation.crm}</Text>
      <Text style={styles.text}>{item.idSituacaoNavigation.situacao1}</Text>
      <Text style={styles.text}>{item.descricao}</Text>
    </View>
  )
 
}

const styles = StyleSheet.create({
  consulta: {
    borderColor: "#8700C0",
    borderWidth: 4,
    marginBottom: 55,
    padding: 10,
  },
});
