import React from "react";
import { View, Text, Linking, TouchableOpacity} from "react-native";
import styles from '../styles';

const MonLien = () => {
    const ouvrirLien = () => {
      
      const url = 'https://reactnative.dev/docs/environment-setup';
      Linking.openURL(url);
    };
    return (
        <View>
            <Text style={styles.text}>Consulter la documentation React Native pour configurer votre environnement de développement  : </Text>
            <TouchableOpacity onPress={ouvrirLien}>
                <Text style={{ color: 'black', textDecorationLine: 'none' }}>
                    ici
                </Text>
            </TouchableOpacity>
        </View>
    );
  };
  export default MonLien;