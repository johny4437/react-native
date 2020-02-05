/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Simples from './src/components/Simples';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Simples text="Mother !!!!" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
