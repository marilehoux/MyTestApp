
import React from 'react';
import { View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import SettingsScreen from './screens/Settings';
import AppScreen from './screens/Sample';
import HomeScreen from './screens/Home';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title='GO to APP'
        color='#EF476F'
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};




Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Config', () => SettingsScreen);
Navigation.registerComponent('Sample', () => AppScreen);


const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home'
                }
              },
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Config'
                }
              }
            ]
          }
        },
        {
            stack: {
              children: [
                {
                  component: {
                    name: 'Sample'
                  }
                }
              ]
            }
          }
      ]
    }
  }
};
const loginRoot = {
  root: {
    component: {
      name: 'Login'
    }
  }
};


Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#whitesmoke'
  },
  topBar: {
    title: {
      color: 'black'
    },
    backButton: {
      color: 'black'
    },
    background: {
      color: 'whitesmoke'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});