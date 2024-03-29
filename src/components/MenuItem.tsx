import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {horizontalScale, verticalScale} from '../utils/screenHelper';
import {TMenuItem} from '../types/menuTypes';

const styles = StyleSheet.create({
  itemContainer: {
    width: horizontalScale(310),
    height: verticalScale(60),
    borderRadius: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainerFocused: {
    borderColor: '#35b1ff',
    backgroundColor: '#c6e9ff',
  },
  itemInnerWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(15),
    paddingLeft: horizontalScale(20),
  },
  itemText: {
    fontFamily: 'Metropolis-Medium',
    fontWeight: 'normal',
    fontSize: horizontalScale(28),
    lineHeight: verticalScale(36),
    letterSpacing: horizontalScale(0.5),
    color: '#FAFAFA',
  },
  itemTextFocused: {
    color: 'black',
  },
});

type TMenuItemProps = {
  item: TMenuItem;
  onPress?(item: any): void;
  onFocus?(item: any, itemRef?: any): void;
  onBlur?(item: any, itemRef?: any): void;
};

export default function MenuItem(props: TMenuItemProps): React.JSX.Element {
  const {
    item,
    onPress = () => {},
    onFocus = () => {},
    onBlur = () => {},
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onFocus={() => {
        setFocused(true);
        onFocus(item);
      }}
      onBlur={() => {
        setFocused(false);
        onBlur(item);
      }}
      style={[styles.itemContainer, focused && styles.itemContainerFocused]}>
      <View style={styles.itemInnerWrapper}>
        <Text
          style={[styles.itemText, focused && styles.itemTextFocused]}
          numberOfLines={1}>
          {item.label}
        </Text>
      </View>
    </Pressable>
  );
}
