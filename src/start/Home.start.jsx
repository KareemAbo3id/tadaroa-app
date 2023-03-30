/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// screens =============:
import EntryNav from '../screens/Entry.nav';
import SettingNav from '../screens/Setting.nav';
// hooks:
import usePalette from '../hooks/usePalette.hook';
import AppBar from '../components/AppBar.component';
// imports ////////////////////////////////

// eslint-disable-next-line no-unused-vars
const { height, width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const screenNames = {
  Entry: 'الرئيسية',
  Setting: 'الاعدادات',
};

// react function /////////////////////////
export default function Home() {
  // local hooks =============:
  const Palette = usePalette();

  return (
    <SafeAreaView style={Styles.fullScreen}>
      {/* NavigationContainer */}
      <Tab.Navigator
        initialRouteName={screenNames.Entry}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            const rn = route.name;

            if (rn === screenNames.Entry) {
              iconName = 'home';
            } else if (rn === screenNames.Setting) {
              iconName = 'cog';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={36}
                color={focused ? Palette.Primary : Palette.SecDark2}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            height: height * 0.1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tab.Screen
          name="الرئيسية"
          component={EntryNav}
          options={{ header: () => <AppBar title={screenNames.Entry} /> }}
        />
        <Tab.Screen
          name="الاعدادات"
          component={SettingNav}
          options={{ header: () => <AppBar title={screenNames.Setting} /> }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// local styles:
const Styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
