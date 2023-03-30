/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Stack } from '@react-native-material/core';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import KMFont from '../hooks/useFont.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function EntryNav() {
  // local hooks:
  const theme = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  // local handlers:

  // onRefresh =============:
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  // local ui:
  return (
    <ScrollView
      style={Styles.fullScreen}
      refreshControl={
        <RefreshControl
          colors={[theme.colors.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <Stack
        justify="center"
        items="stretch"
        direction="column"
        ph={20}
        pv={5}
        mt={20}
        spacing={10}
      >
        <Text
          variant="headlineLarge"
          style={{ fontFamily: KMFont.Black, color: theme.colors.primary }}
        >
          تضرع
        </Text>
      </Stack>
    </ScrollView>
  );
}

// local styles:
const Styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
