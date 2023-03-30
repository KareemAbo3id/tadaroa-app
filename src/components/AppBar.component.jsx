import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import KMFont from '../hooks/useFont.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function AppBar({ title }) {
  // local hooks:
  const theme = useTheme();

  // local handlers:

  // local ui:
  return (
    <Appbar elevated style={[Styles.AppbarStyle, { backgroundColor: theme.colors.primary }]}>
      <Text
        variant="titleMedium"
        style={{ fontFamily: KMFont.Bold, color: theme.colors.secondary }}
      >
        {title}
      </Text>
    </Appbar>
  );
}

// local styles:
const Styles = StyleSheet.create({
  AppbarStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
