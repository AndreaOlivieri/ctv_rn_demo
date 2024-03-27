/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Homepage(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
  },
});

export default Homepage;
