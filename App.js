/* eslint-disable global-require */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable object-curly-newline */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import usePalette from './src/hooks/usePalette.hook';
import useNav from './src/hooks/useNav.hook';

import Home from './src/start/Home.start';
import SettingNav from './src/screens/Setting.nav';
import RouteAppBar from './src/components/RouteAppBar.component';
import EntryNav from './src/screens/Entry.nav';
// imports ////////////////////////////////

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const APP_SCREENS = [
  { id: 1, component: EntryNav, title: '', name: 'Entry' },
  { id: 2, component: SettingNav, title: 'الاعدادات', name: 'Setting' },
];

// react function /////////////////////////
function AppNav() {
  const Palette = usePalette();
  const go = useNav();

  // local ui:

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ statusBarColor: Palette.Primary, headerShown: false, animation: 'simple_push' }}
      />
      {APP_SCREENS.map((screen) => {
        return (
          <Stack.Screen
            key={screen.id}
            name={screen.name}
            component={screen.component}
            options={{
              statusBarColor: Palette.Primary,
              header: () => <RouteAppBar title={screen.title} onPress={() => go.to('home')} />,
              animation: 'fade_from_bottom',
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

function RootNav() {
  const Palette = usePalette();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="root"
        component={AppNav}
        options={{
          statusBarColor: Palette.Primary,
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
        <RootNav />
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
