import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Logo from '../components/Logo';
import FormSignin from '../components/FormSignin';

export default class Login extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage} >
        <View style={styles.container}>
          <FormSignin />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center'
  }
});
