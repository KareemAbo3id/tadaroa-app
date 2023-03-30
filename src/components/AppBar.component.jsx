import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import KMFont from '../hooks/useFont.hook';
import usePalette from '../hooks/usePalette.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function AppBar({ title }) {
  // local hooks:

  const Palette = usePalette();

  // local handlers:

  // local ui:
  return (
    <Appbar style={[Styles.AppbarStyle, { backgroundColor: Palette.Primary }]}>
      <Text variant="bodyLarge" style={{ fontFamily: KMFont.Bold, color: Palette.White }}>
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
