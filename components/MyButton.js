import React from 'react';
import { Button, TouchableOpacity } from 'react-native';

const MyButton = () => {
  return (
    <Button
      title="Lien vers la documentation"
      onPress={() => console.log('Button pressed')}
      style={{
        backgroundColor: '#',
        borderRadius: 15,
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => console.log('TouchableOpacity pressed')}
        style={{
          backgroundColor: '',
          borderRadius: 15,
          padding: 10,
        }}
      >
      </TouchableOpacity>
    </Button>
  );
};

export default MyButton;