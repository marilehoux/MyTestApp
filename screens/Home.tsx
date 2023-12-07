import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import styles from '../styles';
import ItemImage from '../components/ItemImage';
import ItemNoBtn from '../components/ItemNoBtn';
import CardExample from '../components/CardExample';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.root}>
          <Text style={styles.text}>Hello 👋</Text>
          <CardExample
            title="Développer une application mobile avec React Native"
            description="Cette application doit vous permettre de d'installer vos outils de développement
                et de configurer votre environnement de travail pour pouvoir développer une application mobile avec React Native tout en respectant les standards de Pebble"
            image={require('../assets/Pebble.png')}
          />
        </View>

        <ItemImage
         image={require('../assets/react1.png')}
          title="React Native CLI"
          description="React Native CLI est un outil en ligne de commande qui vous permet de créer des applications React Native.
            La procèdure d'installation est accessible via le lien ci-dessous . Les informations et liens complémentaires nécessaires à son bon déroulement figurent dans l'onglet Install. 
            Nous avons choisi de développer nos applications via React Native CLI et DE NE PAS UTILISER EXPO ."
          label="lien vers la page d'accueil de React Native"
          onPress={() => Linking.openURL("https://reactnative.dev/docs/environment-setup")}
        />
        <ItemNoBtn
          title="Points de viglance"
          description="Au cours de l'installation, il est indispensable d'installer précisément les versions recommandées à chaque étape. Il peut être nécessaire d'aller importer manuellement les bonnes librairies (pour watchman par exemple) en fonction des versions de votre système d'exploitation."
        />
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