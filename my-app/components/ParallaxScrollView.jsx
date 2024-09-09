import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

/**
 * @param {{ headerImage: React.ReactNode, headerBackgroundColor: { light: string, dark: string }, children: React.ReactNode }} props
 */
const ParallaxScrollView = ({ headerImage, headerBackgroundColor, children }) => {
  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: headerBackgroundColor.light }]}>
      {headerImage}
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});

export default ParallaxScrollView;
