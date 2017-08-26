import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Header, Button } from 'react-native-elements';

export default class App extends Component {
  state = { term: '' };
  
  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header
          centerComponent={{ text: 'Simple YouTube Search', style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}
        />

        <View style={containerStyle}>
          <TextInput
            style={searchTextStyle}
            onChangeText={term => this.setState({ term })}
            value={this.state.term}
          />
          <Button
            buttonStyle={buttonStyle}
            title="Search"
            onPress={() => console.log(this.state.term)}
          />
        </View>

        {/*VideoList*/}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row'
  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8
  }
};
