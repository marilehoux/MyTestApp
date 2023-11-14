import React from 'react';
import { View, Text,SafeAreaView, ScrollView} from 'react-native';
import styles from '../styles';
import CardExample from '../components/CardExample';

const HomeScreen = () => {
    return (
      <SafeAreaView style={styles.root}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
              <Text style={styles.text}>Hello 👋</Text>
              <CardExample
                title="Développer une application mobile avec React Native"
                description="Cette application doit vous permmetre de d'installer vos outils de développement
                et de configurer votre environnement de travail pour pouvoir développer une application mobile avec React Native tout en respectant les standards de Pebble"
                image={require('../assets/Pebble.png')}
              />
              {/* <CardExample
                title="React Native CLI"
                description="Pebble a choisi de ne pas utiliser Expo pour ce projet. Vous devez donc installer React Native CLI"
                image={require('../assets/react1.png')}
                /> */}
          </View>
		</ScrollView>
      </SafeAreaView>
    );
  };
  HomeScreen.options = {
    topBar: {
      title: {
        text: 'Accueil'
      }
    },
    bottomTab: {
      text: 'Accueil'
    }
  };

  export default HomeScreen;