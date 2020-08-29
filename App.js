/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LoginView } from 'ad-b2c-react-native';
import * as SecureStore from 'expo-secure-store';
import {TouchableOpacity, Alert} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    const onLogin = () => {
    const {navigation} = this.props;
    navigation.navigate('App');
  };

  const onFail = (reason) => {
    Alert.alert(reason);
  };

  const spinner = () => {
    //this is just a sample implementation, so copy pasting will not work as the components used below are custom
    //and are not in imports above. Please replace it with your implementation.
    return (
      <View>
        <TouchableOpacity>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <LoginView
        appId="b64d1181-cb23-44f0-8836-79d33a97af41"
        redirectURI="msauth://com.swapaporter/2jmj7l5rSw0yVb%2FvlWAYkK%2FYBwk%3D"
        tenant="SwapAPorterB2C"
        loginPolicy="B2C_1_Test"
        onSuccess={onLogin}
        onFail={onFail}
        secureStore={SecureStore}
        renderLoading={spinner}
        scope="openid" //optional, but see the notes above
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
