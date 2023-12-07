import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Linking, TouchableOpacity } from 'react-native';
import Item from '../components/Item';
import ItemNoBtn from '../components/ItemNoBtn';
import Title from '../components/Title';

import styles from '../styles';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.scrollView}>
                {/* { <View style={styles.root}>
                    <Text style={styles.text}>Configuration de l'environnement</Text>
                    </View> } */}

                <Title title='les dépendances' />

                <Item
                    title="Node.js version 16 ou supérieure"
                    description="Node.js est un environnement d'exécution JavaScript qui vous permet d'exécuter du code JavaScript côté serveur. Il faut au minimum la version 16."
                    label="lien vers node JS"
                    onPress={() => Linking.openURL("https://nodejs.org/en/learn")}
                />
                <Item
                    title="JDK version 11"
                    description="Le JDK (Java Development Kit) est un ensemble d'outils permettant de développer des applications Java. Il est spécifié que la version 11 est nécessaire et pas une plus récente. "
                    label="lien vers JDK"
                    onPress={() => Linking.openURL("https://openjdk.org/")}
                />
                <Item
                    title="Android Studio"
                    description="Android Studio est un environnement de développement pour développer des applications Android."
                    label="lien vers Android Studio"
                    onPress={() => Linking.openURL("https://developer.android.com/studio")}
                />
                <ItemNoBtn
                    title="Android SDK 13 Tiramisu"
                    description="Le SDK Android fournit une sélection d'outils et de bibliothèques nécessaires au développement d'applications pour Android.Vous devez impérativement installer la version : Android 13 Tiramisu de SDK ! Toutes les étapes à respecter sont détaillées sur la page d'accueil de React Native.
                L'installation se fait pendant celle d'Android Studio."
                />
                <Item
                    title="AVD"
                    description="Un appareil virtuel Android (AVD) est un périphérique de configuration qui simule un appareil Android sur desktop. Nous avons choisi le : pixel 7 pro. L'installation se fait pendant celle d'Android Studio. Veillez à bien installer la version : Tiramisu API Level 33 image."
                    label="lien vers Android Studio"
                    onPress={() => Linking.openURL("https://developer.android.com/studio/run/managing-avds?hl=fr")}
                />
                <Item
                    title="Watchman"
                    description="Watchman est un outil de surveillance de fichiers développé par Facebook."
                    label="lien vers Watchman"
                    onPress={() => Linking.openURL("https://facebook.github.io/watchman/docs/install")}
                />
                <Item
                    title="Metro"
                    description="Enfin il vous faudra un bundler : Metro. La procédure d'installation est détaillée en bas de la page d'accueil de react native . "
                    label="lien vers la documentation de Metro"
                    onPress={() => Linking.openURL("https://metrobundler.dev/docs/concepts/")}
                />


                <Title title='Pour les Dev sur MacOS' />

                <Item
                    title="Homebrew"
                    description="Homebrew est un gestionnaire de paquets pour macOS."
                    label="lien vers Homebrew  "
                    onPress={() => Linking.openURL("https://brew.sh/fr/")}
                />
                <Item
                    title="XCode"
                    description="Xcode est un environnement de développement intégré (IDE) pour macOS qui contient un ensemble d'outils créés par Apple pour le développement de logiciels pour macOS, iOS, iPadOS, watchOS et tvOS."
                    label="lien vers XCode "
                    onPress={() => Linking.openURL("https://developer.apple.com/xcode/")}
                />

                <Item
                    title="CocoaPods"
                    description="CocoaPods est un gestionnaire de dépendances pour les projets Xcode."
                    label="lien vers CocoaPods"
                    onPress={() => Linking.openURL("https://cocoapods.org/")}
                />

                <Title title='Les outils de développement comlémentaires' />

                <Item
                    title="Visual Studio Code"
                    description="Visual Studio Code est un éditeur de code source développé par Microsoft pour Windows, Linux et macOS."
                    label="lien vers VS Code"
                    onPress={() => Linking.openURL("https://code.visualstudio.com/")}
                />
                <Item
                    title="Git"
                    description="Git est un système de contrôle de version distribué gratuit et open source conçu pour gérer tout, du petit au très grand projet, avec rapidité et efficacité."
                    label="lien vers GIT"
                    onPress={() => Linking.openURL("https://git-scm.com/")}
                />
                <Item
                    title="GitHub"
                    description="GitHub est une plateforme de développement inspirée du réseau social Twitter."
                    label="lien vers GitHub "
                    onPress={() => Linking.openURL("https://github.com/")}
                />
                <Item
                    title="GitHub Desktop"
                    description="GitHub Desktop est une application qui vous permet de contribuer à des projets sur GitHub."
                    label="lien vers GitHub Desktop "
                    onPress={() => Linking.openURL("https://desktop.github.com/")}
                />


                <Title title=' !! IMPORTANT ne pas installer EXPO !!' />

                <ItemNoBtn
                    title="Expo CLI"
                    description="Expo CLI est un outil en ligne de commande qui vous permet de développer des applications Expo."
                />
                <ItemNoBtn
                    title="Expo Go"
                    description="Expo Go est une application mobile qui vous permet de tester vos applications Expo directement sur votre téléphone."
                />


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
{/* 
                
                
               
                <Item
                title="React Native Navigation"
                description="React Native Navigation est une bibliothèque de navigation pour React Native."
                />

                
                */}