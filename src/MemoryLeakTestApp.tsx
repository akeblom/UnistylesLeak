import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import '@styles/passepartout/unistyles';
// import { MemoryLeakTest } from './screens/MemoryLeakTest';
import { MemoryLeakTestAdvanced } from './screens/MemoryLeakTestAdvanced';

/**
 * Minimal app wrapper for testing memory leaks with Unistyles.
 * This bypasses all the normal app infrastructure to focus purely on Unistyles component rendering.
 */
const MemoryLeakTestApp = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <MemoryLeakTestAdvanced />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
}));

export default MemoryLeakTestApp;
