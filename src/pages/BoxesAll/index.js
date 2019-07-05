import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import socket from 'socket.io-client';

import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";

import api from "../../services/api";

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Box extends Component {
  
  state = {
    box: {}
  };

  async componentDidMount() {
    
    
    const box = await AsyncStorage.getItem('@AppBox:box');

    this.subscribeToNewFiles(box);
    
    const response = await api.get(`boxes/show/all`);
    
    this.setState({ box: response.data });
  
  }

  subscribeToNewFiles = (box) => {

    const io = socket('https://r14-omnistack-backend.herokuapp.com');

    io.emit('connectRoom', box);

    io.on('file', data => {
        this.setState({
            box: { ...this.state.box, files: [data, ...this.state.box.files ]}
        });
    });
  }; 

  openFolder = async (folder) => {

    try{

      
        this.props.navigation.navigate('Box'); 
      


     
      
    } catch (err) {
      console.log('arquivo não encontrado');
    }
 
  };
  
  
  handleNavigationAdd = () => {
    this.props.navigation.navigate('BoxesAll'); 

  }
  
  renderItem = ({ item }) => (
    
    <TouchableOpacity
      onPress={() => this.openFolder(item)}
      style={styles.file}
    >
      <View style={styles.fileInfo}>
        <Icon name="insert-drive-file" size={24} color="#A5CFFF" />
        <Text style={styles.fileTitle}>{item.title}</Text>
      </View>

      <Text style={styles.fileDate}>
        há{" "}
        {distanceInWords(item.createdAt, new Date(), { locale: pt })}
      </Text>
    </TouchableOpacity>
  );
     
  render() {
    return (

      
      <View style={styles.container}>
        <Text style={styles.boxTitle}>Boxes</Text>

        <FlatList
          style={styles.list} 
          data={this.state.box}
          keyExtractor={ file => file._id }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={this.renderItem}
        />
        <TouchableOpacity style={styles.fab} onPress={this.handleNavigationAdd}>
          <Icon name="add" size={32} color="#FFF" />
        </TouchableOpacity> 
      </View> 
    );
  } 
} 
