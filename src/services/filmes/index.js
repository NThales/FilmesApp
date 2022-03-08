import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Filmes extends Component {
  render() {
    const {nome, foto} = this.props.data;
    return (
      <View style={{backgroundColor:'black'}}>
        <View style={styles.card}>
          <Text style={styles.titulo}>{nome}</Text>
          <Image source={{uri: foto}} style={styles.capa} />

          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao} onPress={()=>alert(nome)}>
              <Text style={styles.textoBotao}>Leia Mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    shadowColor:'#000',
    backgroundColor:'#4B0082',
    shadowOffset: {width:0, height:1},
    shadowOpacity:0.8,
    margin:15,
    shadowRadius:5,
    borderRadius:5,
    elevation:3,
  },

  titulo:{
    fontSize:18,
    padding: 15,
    color:'#FFF',
    fontWeight:'bold'
  },
  
  capa:{
    height: 250,
    xIndex:2,
  },

  areaBotao:{
    alignItems:'flex-end',
    marginTop: -40,
    zIndex:9
  },

  botao:{
    width: 100,
    backgroundColor: '#4B0082',
    opacity: 1,
    padding:8,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },

  textoBotao:{
    textAlign:'center',
    color: '#FFF',
    fontWeight:'bold'
  }
});

export default Filmes;
