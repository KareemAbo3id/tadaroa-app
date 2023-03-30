/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, useTheme } from 'react-native-paper';
// screens =============:
import EntryNav from '../screens/Entry.nav';
import SettingNav from '../screens/Setting.nav';
// hooks:
import AppBar from '../components/AppBar.component';
import KMFont from '../hooks/useFont.hook';
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
  const theme = useTheme();

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
              iconName = 'script-text';
            } else if (rn === screenNames.Setting) {
              iconName = 'cog';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={focused ? theme.colors.secondary : theme.colors.tertiary}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            let tabLabel;
            const rn = route.name;

            if (rn === screenNames.Entry) {
              tabLabel = 'الاذكار';
            } else if (rn === screenNames.Setting) {
              tabLabel = 'الاعدادات';
            }

            return (
              <Text
                variant="labelMedium"
                style={{
                  fontFamily: KMFont.Medium,
                  color: focused ? theme.colors.secondary : theme.colors.tertiary,
                }}
              >
                {tabLabel}
              </Text>
            );
          },
          tabBarShowLabel: true,
          tabBarItemStyle: { paddingVertical: 8 },
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
          options={{
            headerShown: false,
          }}
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
