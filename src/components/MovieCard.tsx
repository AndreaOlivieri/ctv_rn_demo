import React, {useState} from 'react';
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
  movieContainerFocused: {
    borderColor: '#35b1ff',
    backgroundColor: '#c6e9ff',
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
  onPress?(movie: any): void;
  onFocus?(movie: any, movieRef?: any): void;
  onBlur?(movie: any, movieRef?: any): void;
};

export default function MovieCard(props: TMovieCardProps): React.JSX.Element {
  const {
    movie,
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
        onFocus(movie);
      }}
      onBlur={() => {
        setFocused(false);
        onBlur(movie);
      }}
      style={[styles.movieContainer, focused && styles.movieContainerFocused]}>
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
