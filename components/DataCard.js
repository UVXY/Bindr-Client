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
      <TouchableOpacity>
      <Image source={{ uri: image }} style={props.style} onPress={()=> props.recommendationTab()}/>
      {/* onPress={()=> props.renderRec(word)}  */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  buttonContainer: {
    flex: 1,
    alignContent: 'flex-start',
  },
});
