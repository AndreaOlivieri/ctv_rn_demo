/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, StyleSheet, TVFocusGuideView} from 'react-native';
import MenuItem from './MenuItem';
import {horizontalScale, verticalScale} from '../utils/screenHelper';
import {TMenuItem, TMenuItemList} from '../types/menuTypes';

const MENU_ITEMS: TMenuItemList = [
  {label: 'homepage'},
  {label: 'blog'},
  {label: 'login'},
];

function Menu(): React.JSX.Element {
  return (
    <TVFocusGuideView autoFocus style={styles.menuContainer}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={({item}: {item: TMenuItem}) => {
          return <MenuItem item={item} />;
        }}
        contentContainerStyle={styles.menuItemListContainer}
      />
    </TVFocusGuideView>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: horizontalScale(10),
    paddingRight: horizontalScale(10),
  },
  menuItemListContainer: {
    gap: verticalScale(20),
  },
});

export default Menu;
