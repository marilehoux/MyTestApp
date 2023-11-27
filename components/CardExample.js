import React from 'react';
import { View, Text, Image} from 'react-native';

const CardExample = ({ title, description, image}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ebf2f2', padding: 15, margin:20, borderRadius:15 }}>
      <Image source={image} style={{ width: 320, height: 100 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 , marginTop:10}}>
        {title}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        {description}
      </Text>
    </View>
  );
};

export default CardExample;