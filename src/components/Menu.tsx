/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MenuItem from './MenuItem';
import {verticalScale} from '../utils/screenHelper';
import {TMenuItem, TMenuItemList} from '../types/menuTypes';

const MENU_ITEMS: TMenuItemList = [
  {label: 'homepage'},
  {label: 'blog'},
  {label: 'login'},
];

function Menu(): React.JSX.Element {
  return (
    <View style={styles.menuContainer}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={({item}: {item: TMenuItem}) => {
          return <MenuItem item={item} />;
        }}
        contentContainerStyle={styles.menuItemListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  menuItemListContainer: {
    gap: verticalScale(20),
  },
});

export default Menu;
