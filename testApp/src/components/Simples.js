import React from 'react';
import {Text} from 'react-native';
import Padrao from '../style/Padrao';
const Simples = props => {
  return <Text style={Padrao.ex}>{props.text}</Text>;
};

export default Simples;
