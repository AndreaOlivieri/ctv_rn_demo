import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TVFocusGuideView} from 'react-native';
import SectionItem from './SectionItem';
import {fetchSectionList} from '../providers/MovieProvider';
import {TSection, TSectionList} from '../types/sectionsTypes';
import {horizontalScale, verticalScale} from '../utils/screenHelper';

function Sections(): React.JSX.Element {
  const [sections, setSections] = useState<TSectionList>([]);

  useEffect(() => {
    fetchSectionList().then(newSections => {
      setSections(newSections);
    });
  }, []);

  return (
    <TVFocusGuideView autoFocus style={styles.sectionsContainer}>
      <FlatList
        horizontal={false}
        data={sections}
        renderItem={({item}: {item: TSection}) => {
          return <SectionItem section={item} />;
        }}
        contentContainerStyle={styles.sectionListContainer}
      />
    </TVFocusGuideView>
  );
}

const styles = StyleSheet.create({
  sectionsContainer: {
    backgroundColor: '#f7f7f7',
  },
  sectionListContainer: {
    flexGrow: 1,
    gap: verticalScale(50),
    paddingLeft: horizontalScale(30),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(30),
  },
});

export default Sections;
