import React from 'react';
import { View, SafeAreaView, ScrollView} from 'react-native';
import styles from '../styles';

import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CardExample from '../components/CardExample';
import MyButton from '../components/MyButton';




const AppScreen = () => {
	return (
		<SafeAreaView >
			<ScrollView
			style={styles.scrollView}>
				<View style={styles.root}>
					<CardExample
					title="Développer une application mobile avec React Native"
					description="Si vous avez installer l'ensemble des outils de développement, vous devez pouvoir développer votre app avec React Native. Vous trouverez ci-dessous quelques lines complémentaires pour vous familiariser avec ce framework si besoin.."
					image={require('../assets/react1.png')}
					/>
					
				</View>
				<View style={styles.viewSample}>
	
					{/* <ReloadInstructions /> */}
					{/* <DebugInstructions /> */}
					<LearnMoreLinks />
				</View>
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