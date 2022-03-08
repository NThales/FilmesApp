import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, FlatList, StatusBar} from 'react-native';

import api from './src/services/api';
import Filmes from './src/services/filmes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return(
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'black'}}>
          <StatusBar backgroundColor={'black'}/>
          <ActivityIndicator color="#4B0082" size={40}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor={'black'}/>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
