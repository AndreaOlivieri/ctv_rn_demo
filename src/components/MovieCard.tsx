import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {horizontalScale, verticalScale} from '../utils/screenHelper';
import {TMovie} from '../types/sectionsTypes';

const styles = StyleSheet.create({
  movieContainer: {
    width: horizontalScale(400),
    height: verticalScale(300),
    borderRadius: verticalScale(30),
    borderWidth: 2,
    borderColor: '#bcbcbc',
    backgroundColor: '#eaeaea',
  },
  movieInnerWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: horizontalScale(15),
    paddingTop: horizontalScale(20),
    paddingBottom: horizontalScale(20),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(20),
  },
  movieTitle: {
    fontFamily: 'Metropolis-Medium',
    fontWeight: 'normal',
    fontSize: horizontalScale(28),
    lineHeight: verticalScale(36),
    letterSpacing: horizontalScale(0.5),
    color: 'black',
  },
  movieDescription: {
    fontFamily: 'Metropolis-Medium',
    fontWeight: 'normal',
    fontSize: horizontalScale(18),
    lineHeight: verticalScale(36),
    letterSpacing: horizontalScale(0.5),
    color: 'black',
  },
});

type TMovieCardProps = {
  movie: TMovie;
  onPress?(item: any): void;
  onFocus?(item: any, itemRef?: any): void;
  onBlur?(item: any, itemRef?: any): void;
};

export default function MovieCard(props: TMovieCardProps): React.JSX.Element {
  const {
    movie,
    onPress = () => {},
    onFocus = () => {},
    onBlur = () => {},
  } = props;

  return (
    <Pressable
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
      style={styles.movieContainer}>
      <View style={styles.movieInnerWrapper}>
        <Text style={styles.movieTitle} numberOfLines={1}>
          {movie.title}
        </Text>
        <Text style={styles.movieDescription} numberOfLines={5}>
          {movie.description}
        </Text>
      </View>
    </Pressable>
  );
}
