/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Sections(): React.JSX.Element {
  return (
    <View style={styles.sectionsContainer}>
      <Text>Sections</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionsContainer: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
});

export default Sections;
