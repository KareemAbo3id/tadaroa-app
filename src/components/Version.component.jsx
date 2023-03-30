/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native-paper';
import KMFont from '../hooks/useFont.hook';
import usePalette from '../hooks/usePalette.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function Version() {
  // local hooks:
  const Palette = usePalette();

  // local handlers:

  // local ui:
  return (
    <Text
      style={{
        color: Palette.SecDark,
        textAlign: 'center',
        fontFamily: KMFont.Regular,
      }}
    >
      نسخة تجريبية V1.0.15
    </Text>
  );
}
