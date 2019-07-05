import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';


import api from '../../services/api';
 
import styles from './styles';

import logo from "../../assets/logo.png";

export default class Main extends Component {
  state = {
    newBox: ''
  } 

  async componentDidMount() {
    const box = await AsyncStorage.getItem("@AppBox:box");

    if (box) {
      this.props.navigation.navigate('Box'); 
    }
  }

  handleNavigationList = () => {
    this.props.navigation.navigate('BoxesAll');
  }

  handleSignIn = async () => {

    const response = await api.post('boxes', {
      title:this.state.newBox
    });

    await AsyncStorage.setItem('@AppBox:box', response.data._id);

    this.props.navigation.navigate('Box'); 

  }

  render() {
    return ( 
      
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            
            <TextInput
              style={styles.input}
              placeholder="Criar um box"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              value={this.state.newBox} 
              onChangeText={text => this.setState({ newBox: text })}
            /> 
 
            <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
              <Text style={styles.buttonText}>CRIAR BOX</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleNavigationList} style={styles.fab}>
              <Icon name="list" size={32} color="#FFF" />
            </TouchableOpacity>
  
        </View>  
    );
    
  }
}