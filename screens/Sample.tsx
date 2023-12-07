import React from 'react';
import { View, SafeAreaView, ScrollView, Linking} from 'react-native';
import styles from '../styles';

import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CardExample from '../components/CardExample';
import Item from '../components/Item'
import ItemImage from '../components/ItemImage'
import ItemNoBtn from '../components/ItemNoBtn'
import MyButton from '../components/MyButton';





const AppScreen = () => {
	return (
		<SafeAreaView >
			<ScrollView style={styles.scrollView}>
				<View style={styles.root}>
					<CardExample
						title="Développer une application mobile avec React Native"
						description="Si vous avez installer l'ensemble des outils de développement, vous devez pouvoir développer votre app avec React Native. Vous trouverez ci-dessous quelques liens complémentaires pour vous familiariser avec ce framework si besoin.."
						image={require('../assets/react1.png')}
					/>
					
				</View>

				<View style={styles.root}>
					
					<ItemImage
						image={require('../assets/gourou.png')}
						title="Tutoriel et commandes utiles"
						description="Notre dev front le plus compétent a vous a concocté un recueil d'infos utiles accessibles via le lien ci-dessous!! Les extensions de VSCode vous seront très utiles et vous y retrouverez la bibliothèque : React Navigation , que nous avons choisi. "
						label="lien vers le craft "
						onPress={() => Linking.openURL("https://beds-rush-1vk.craft.me/AkYwY7AjMBVex9")}
					/>
						
				</View>
					
					
					
					
					
			{/* <Item
                title=""
                description=""
                label="lien vers "
                onPress={() => Linking.openURL("")}
                />

                <ItemNoBtn
                title=""
                description=""
                />  */}
				
				{/*
				<CardExample
					title="Développer une application mobile avec React Native"
					description="Si vous avez installer l'ensemble des outils de développement, vous devez pouvoir développer votre app avec React Native. Vous trouverez ci-dessous quelques lignes complémentaires pour vous familiariser avec ce framework si besoin.."
					image={require('../assets/react1.png')}
					/>/* 
				 */}
				
			</ScrollView>
		</SafeAreaView>
	);

  }
  AppScreen.options = {
    topBar: {
      title: {
        text: 'Documentation'
      }
    },
    bottomTab: {
      text: 'Documentation'
    }
  }

  export default AppScreen;