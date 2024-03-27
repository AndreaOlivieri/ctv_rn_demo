/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Menu(): React.JSX.Element {
  return (
    <View style={styles.menuContainer}>
      <Text>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: 100,
    backgroundColor: 'red',
  },
});

export default Menu;
