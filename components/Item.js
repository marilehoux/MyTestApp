import React from 'react';
import { View, Text} from 'react-native';
import MyButton from './MyButton';

const CardExample = ({ title, description}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ebf2f2', padding: 15, margin:20, borderRadius:15 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 , marginTop:10, color:'black'}}>
        {title.toUpperCase()}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        {description}
      </Text>
      <MyButton></MyButton>
    </View>
  );
};

export default CardExample;