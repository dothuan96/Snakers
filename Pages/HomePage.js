import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import HomepageData from '../data/homepageData';
import MenuItem from '../components/MenuItem';

let {height, width} = Dimensions.get('window');

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataItem: HomepageData,     //change this when you want access another data
      heightBar: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuItem
          dataItem={this.state.dataItem}
          heightBar={this.state.heightBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  }
});
