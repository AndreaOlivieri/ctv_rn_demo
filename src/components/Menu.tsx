/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
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
    <FlatList
      data={MENU_ITEMS}
      renderItem={({item}: {item: TMenuItem}) => {
        return <MenuItem item={item} />;
      }}
      contentContainerStyle={styles.menuContainer}
    />
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    gap: verticalScale(20),
    flex: 1,
    justifyContent: 'center',
  },
});

export default Menu;
