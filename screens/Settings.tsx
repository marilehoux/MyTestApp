import React from 'react';
import { SafeAreaView, ScrollView,} from 'react-native';
import Item from '../components/Item';
import Title from '../components/Title';

import styles from '../styles';
import MyButton from '../components/MyButton';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.scrollView}>
                {/* <View style={styles.root}>
                    <Text style={styles.text}>Configuration de l'environnement</Text>
                    <LinkDoc/>
                </View> */}
                <Title title='les dépendances'/>
                
                

                <Item
                    title="Node.js version 16 ou supérieure"
                    description="Node.js est un environnement d'exécution JavaScript qui vous permet d'exécuter du code JavaScript côté serveur."
                />
                <Item
                title="JDK"
                description="Le JDK (Java Development Kit) est un ensemble d'outils permettant de développer des applications Java."
                />
                <Item
                title="Android Studio"
                description="Android Studio est un environnement de développement pour développer des applications Android."
                />
                <Item
                title="Android SDK"
                description="Le SDK Android fournit une sélection d'outils et de bibliothèques nécessaires au développement d'applications pour Android."
                />
                <Item
                title="AVD"
                description="Un appareil virtuel Android (AVD) est un périphérique de configuration qui simule un appareil Android."
                />
                <Item
                title="Watchman"
                description="Watchman est un outil de surveillance de fichiers développé par Facebook."
                />
                <Title title='Pour les Dev sur MacOS'/>
                <Item
                title="Homebrew"
                description="Homebrew est un gestionnaire de paquets pour macOS."
                />
                <Item
                title="XCode"
                description="Xcode est un environnement de développement intégré (IDE) pour macOS qui contient un ensemble d'outils créés par Apple pour le développement de logiciels pour macOS, iOS, iPadOS, watchOS et tvOS."   
                />
                <Item
                title="CocoaPods"
                description="CocoaPods est un gestionnaire de dépendances pour les projets Xcode."
                />
                <Title title='React Native et ses librairies'/>
               
                <Item
                title="React Native CLI"
                description="React Native CLI est un outil en ligne de commande qui vous permet de créer des applications React Native."
                />
                <Item
                title="React Native Navigation"
                description="React Native Navigation est une bibliothèque de navigation pour React Native."
                />

                
                <Title title='Les outils comlémentaires'/>
                
                <Item
                title="Visual Studio Code"
                description="Visual Studio Code est un éditeur de code source développé par Microsoft pour Windows, Linux et macOS."
                />
                <Item
                title="Git"
                description="Git est un système de contrôle de version distribué gratuit et open source conçu pour gérer tout, du petit au très grand projet, avec rapidité et efficacité."
                />
                <Item
                title="GitHub"
                description="GitHub est une plateforme de développement inspirée du réseau social Twitter."
                />
                <Item
                title="GitHub Desktop"
                description="GitHub Desktop est une application qui vous permet de contribuer à des projets sur GitHub."
                />
                

                <Title title='IMPORTANT ne pas installer EXPO __ '/>
        
                <Item
                title="Expo CLI"
                description="Expo CLI est un outil en ligne de commande qui vous permet de développer des applications Expo."
                />
                <Item
                title="Expo Go"
                description="Expo Go est une application mobile qui vous permet de tester vos applications Expo directement sur votre téléphone."
                />
            </ScrollView>
        </SafeAreaView>
    );
}
SettingsScreen.options = {
    topBar: {
        title: {
        text: 'Install'
        }
    },
    bottomTab: {
        text: 'Install'
    }
}

export default SettingsScreen;