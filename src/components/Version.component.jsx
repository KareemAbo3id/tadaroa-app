/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import KMFont from '../hooks/useFont.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function Version() {
  // local hooks:
  const theme = useTheme();

  // local handlers:

  // local ui:
  return (
    <Text
      style={{
        color: theme.colors.tertiary,
        textAlign: 'center',
        fontFamily: KMFont.Regular,
      }}
    >
      نسخة تجريبية V1.0.15
    </Text>
  );
}
