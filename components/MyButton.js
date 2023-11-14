import React from 'react';
import { Button, TouchableOpacity } from 'react-native';

const MyButton = () => {
  return (
    <Button
      title="Click me"
      onPress={() => console.log('Button pressed')}
      style={{
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => console.log('TouchableOpacity pressed')}
        style={{
          backgroundColor: 'red',
          borderRadius: 5,
          padding: 10,
        }}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
    </Button>
  );
};

export default MyButton;