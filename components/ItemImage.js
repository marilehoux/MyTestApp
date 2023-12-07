import React from 'react';
import {View, Text, Linking, Image} from 'react-native';
import MyButton from './MyButton';

const CardExample = ({title, description, label, onPress , image}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ebf2f2',
        padding: 15,
        margin: 20,
        borderRadius: 15,
      }}>
      <Image source={image} style={{width: 320, height: 100}} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop: 10,
          color: 'black',
        }}>
        {title.toUpperCase()}
      </Text>
      <Text style={{fontSize: 16, marginBottom: 10}}>{description}</Text>
      <MyButton title={label} onPress={onPress} />
    </View>
  );
};

export default CardExample;
