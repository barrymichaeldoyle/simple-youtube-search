import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';

const API_KEY = '';
/*
  Remember to populate this API_KEY with you own API_KEY
  Checkout my video here showing you how to do that
  https://youtu.be/AqWz1NA9unQ
*/

export default class App extends Component {
  onPressSearch = term => {
    console.log(term);
  }
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="Simple YouTube Search" />
        <SearchBar onPressSearch={this.onPressSearch} />
        {/*VideoList*/}
      </View>
    );
  }
}
