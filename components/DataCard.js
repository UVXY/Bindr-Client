import React, {Component} from "react";
import { ScrollView, Image } from 'react-native';
import { Text } from "native-base";

export default DataCard = (props) => {
  const { image, word, _id } = props.data;

  console.warn(_id);
  return (
    <ScrollView>
    <Text note>{word}</Text>
    <Image source={{ uri: image }}/>
    </ScrollView>
  );
}


// export default class GifPicture extends Component {

//   render() { 
//   const gifs = [
//       "travel", "wandering", "lost", "best", "earliest-list", "favourites", "writer", "sad", "crying", "death", "learning", "technology", "help", "comedy", "funny", "humor", "humour", "satire", "old", "ancient", "storm", "cloudy", "celebrity", "movies", "blond", "fantasy", "sci-fi", "science-fiction", "sf", "classics", "business", "career", "creativity", "fitness", "happiness", "health", "love", "non-fiction", "nonfiction", "productivity", "relationships", "romance", "self-help", "success", "wellness", "baseball", "sports", "book club", "historical", "literary", "summer", "sunny", "clear", "warm", "autumn", "books", "coffee", "creep", "creepy", "dark", "fall", "fireplace", "freaky", "halloween", "leaves", "november", "october", "pumpkin", "rain", "rainy", "reading", "scary", "september", "spooky", "sweater", "tea", "thanksgiving", "intrigue", "mystery", "thriller", "fiction", "seasons", "setting", "weather", "winter", "cold", "warmup"
//   ];
//   const listItems = gifs.map((gif) => {
//       axios
//       .get("https://api.giphy.com/v1/gifs/random?api_key=#####&tag=cats", {params: {q: {gif}}})
//       .then( (results) => { 
//           var imageUrl = response.data.image_original_url;
  
//           <Image source = {imageUrl} />
//           console.warn(results.data.image_original_url); 
//       })
//       .catch(err => console.log(err));   
//   })  
//       return ( 
//           <View>
//               <Image source= {listItems}/>
//       </View>
//       );
//   }}