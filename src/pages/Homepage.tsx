/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Menu from '../components/Menu';
import Sections from '../components/Sections';

function Homepage(): React.JSX.Element {
  return (
    <View style={styles.pageContainer}>
      <Menu />
      <Sections />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
});

export default Homepage;
