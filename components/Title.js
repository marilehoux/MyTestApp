import React from 'react';
import { View, Text} from 'react-native';

const H1 = ({ title}) => {
  return (
    <View style={{ flex: 1, padding: 15, margin:20, borderRadius:15, backgroundColor:'#384454'}}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 , marginTop:10 , color : 'white'}}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export default H1;