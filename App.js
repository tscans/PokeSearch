import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  }
  switchScreen = (screen) => {
    this.setState({currentScreen: screen})
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "search"){
      return(
        <Search />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
});
