import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';

const API_KEY = '';
/*
  Remember to populate this API_KEY with you own API_KEY
  Checkout my video here showing you how to do that
  https://youtu.be/AqWz1NA9unQ
*/

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({
        loading: false,
        videos
      });
    });
  }
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="Simple YouTube Search" />
        <SearchBar
          loading={this.state.loading}
          onPressSearch={this.onPressSearch}
        />
        {/*VideoList*/}
      </View>
    );
  }
}
