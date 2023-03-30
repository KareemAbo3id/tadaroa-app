import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '@react-native-material/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import KMFont from '../hooks/useFont.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function RouteAppBar({ title, onPress }) {
  // local hooks:
  const theme = useTheme();

  // local handlers:

  // local ui:
  return (
    <Appbar elevated style={[Styles.AppbarStyle, { backgroundColor: theme.colors.primary }]}>
      <MaterialCommunityIcons
        onPress={onPress}
        style={[Styles.AppIconStyle, { backgroundColor: theme.colors.primary }]}
        name="chevron-right"
        size={30}
        color={theme.colors.background}
      />
      <Box mh={5} />
      <Text
        variant="headlineSmall"
        style={{ fontFamily: KMFont.Bold, color: theme.colors.background }}
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
  AppIconStyle: {
    borderRadius: 1000,
  },
});
