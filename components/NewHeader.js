import React from "react";  
import { View, Text, StyleSheet, Image } from "react-native";

class NewHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
        style={{width: 180, height: 50}}
        source={require('../assets/Pebble-color-1000.png')}
        />
        <Text style={styles.headerText}>Developper React native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#2e6063",
        height: 130,
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: "white",
        fontSize: 30
    }
    });
export default NewHeader