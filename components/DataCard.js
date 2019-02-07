import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default DataCard = (props) => {
  const { image, style, goToRecommendations, picturePickerBookTag, wordsearchBookTags } = props;
  const bookTags = wordsearchBookTags

  function navigateToRecs() {
    bookTags.push(picturePickerBookTag);
    goToRecommendations(bookTags);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateToRecs}
      >
        <Image
          source={{ uri: image }}
          style={style}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    alignContent: 'flex-start'
  }
});
