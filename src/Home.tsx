import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.text}>Hello world</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
  },
});
