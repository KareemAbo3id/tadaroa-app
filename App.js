/* eslint-disable global-require */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable object-curly-newline */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Home from './src/start/Home.start';
import SettingNav from './src/screens/Setting.nav';
import EntryNav from './src/screens/Entry.nav';
// imports ////////////////////////////////

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,

  colors: {
    primary: '#09222c',
    secondary: '#e2b925',
    tertiary: '#828b92',
    white: '#ffffff',
    black: '#000',
    gray: '#8d8d8d',
    transparent: 'transparent',
  },
};

const APP_SCREENS = [{ id: 2, component: SettingNav, title: 'الاعدادات', name: 'Setting' }];

// react function /////////////////////////
function AppNav() {
  // local ui:

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, animation: 'simple_push' }}
      />
      <Stack.Screen name="Entry" component={EntryNav} />
      {APP_SCREENS.map((screen) => {
        return <Stack.Screen key={screen.id} name={screen.name} component={screen.component} />;
      })}
    </Stack.Navigator>
  );
}

function RootNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="root"
        component={AppNav}
        options={{
          statusBarStyle: 'auto',
          statusBarColor: theme.colors.primary,
          headerShown: false,
          animation: 'simple_push',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // font hook:
  const [fontsLoaded] = useFonts({
    'Tajawal-Regular': require('./assets/fonts/Tajawal-Regular.ttf'),
    'Tajawal-Bold': require('./assets/fonts/Tajawal-Bold.ttf'),
    'Tajawal-Medium': require('./assets/fonts/Tajawal-Medium.ttf'),
    'Tajawal-Black': require('./assets/fonts/Tajawal-Black.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={Styles.fullScreen} onLayout={onLayoutRootView}>
        <PaperProvider theme={theme}>
          <RootNav />
        </PaperProvider>
      </View>
    </NavigationContainer>
  );
}

// local styles:
const Styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
