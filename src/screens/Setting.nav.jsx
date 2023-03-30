import React from 'react';
import { StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Stack } from '@react-native-material/core';
import { Text, useTheme } from 'react-native-paper';
import Version from '../components/Version.component';
import KMFont from '../hooks/useFont.hook';
// imports ////////////////////////////////

// react function /////////////////////////
export default function SettingNav() {
  // local hooks:
  const theme = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);

  // onRefresh =============:
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
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
          variant="titleSmall"
          style={{ fontFamily: KMFont.Bold, color: theme.colors.tertiary }}
        >
          الاعدادات
        </Text>
      </Stack>
      <Stack
        justify="center"
        items="stretch"
        direction="column"
        ph={20}
        mv={20}
        pv={5}
        spacing={10}
      >
        <Version />
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
