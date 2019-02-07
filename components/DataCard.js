import React, {Component} from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from "native-base";

// export default class WordSearch extends Component {

export default DataCard = (props) => {
  // render (){
  const { image, word, _id } = props;
  // console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> props.recommendationTab()}>
      <Image source={{ uri: image }} style={props.style} />
      {/* onPress={()=> props.renderRec(word)}  */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignContent: 'flex-start',
  },
});
