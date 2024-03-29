import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TMovie, TSection} from '../types/sectionsTypes';
import MovieCard from './MovieCard';
import {horizontalScale, verticalScale} from '../utils/screenHelper';

type TSectionItemProps = {
  section: TSection;
};

function SectionItem(props: TSectionItemProps): React.JSX.Element {
  const {section} = props;
  return (
    <View style={styles.sectionItemContainer}>
      <Text style={styles.sectionItemTitle}>{section.title}</Text>
      <FlatList
        horizontal={true}
        data={section.movies}
        renderItem={({item}: {item: TMovie}) => {
          return <MovieCard movie={item} />;
        }}
        contentContainerStyle={styles.movieListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionItemContainer: {
    flexGrow: 1,
    width: '100%',
    gap: horizontalScale(10),
  },
  movieListContainer: {
    flexGrow: 1,
    width: '100%',
    gap: horizontalScale(10),
  },
  sectionItemTitle: {
    fontFamily: 'Metropolis-Medium',
    fontWeight: 'normal',
    fontSize: horizontalScale(40),
    lineHeight: verticalScale(50),
    letterSpacing: horizontalScale(0.5),
    color: 'black',
  },
});

export default SectionItem;
