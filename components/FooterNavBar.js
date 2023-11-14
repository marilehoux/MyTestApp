import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
    
  return (
    <View style={{ flex: 2, backgroundColor: '#ebf2f2', padding: 20 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => alert('Button Pressed')}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
             + d'autres options
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          autre options
        </Text>
      </View>
    </View>
  );
};

export default App;