import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C0C0C0',
  },
  button: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#ebf2f2',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const NavigationBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>doc</Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.buttonText}>sample</Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.buttonText}>en plus</Text>
        </View>
    </View>
  );
};

export default NavigationBar;