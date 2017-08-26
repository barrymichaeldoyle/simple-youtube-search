import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header
          centerComponent={{ text: 'Simple YouTube Search', style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}
        />
        {/*SearchBar*/}
        {/*VideoList*/}
      </View>
    );
  }
}
