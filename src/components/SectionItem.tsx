import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TMovie, TSection} from '../types/sectionsTypes';
import MovieCard from './MovieCard';
import {horizontalScale, verticalScale} from '../utils/screenHelper';

type TSectionItemProps = {
  section: TSection;
};

function SectionItem(props: TSectionItemProps): React.JSX.Element {
  const {section} = props;

  const SectionItemListRef = useRef(null);
  const CurrentIndexRef = useRef(0);

  return (
    <View style={styles.sectionItemContainer}>
      <Text style={styles.sectionItemTitle}>{section.title}</Text>
      <FlatList
        ref={SectionItemListRef}
        horizontal={true}
        data={section.movies}
        renderItem={({item, index}: {item: TMovie; index: number}) => {
          return (
            <MovieCard
              movie={item}
              onFocus={() => {
                if (CurrentIndexRef.current != index) {
                  SectionItemListRef?.current?.scrollToIndex({
                    index,
                    animated: true,
                  });
                }
                CurrentIndexRef.current = index;
              }}
            />
          );
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
    gap: horizontalScale(40),
    paddingRight: horizontalScale(1000),
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
