import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card, CardItem, Text, Left, Body, Icon 
} from 'native-base';

export default RecommendationCard = (props) => {
  const { title, image, authors, _id } = props.data;

  console.log(_id);
  return (
    <Card style={{ elevation: 3 }}>
      <CardItem>
        <Left>
          <Body>
            <Text>{title}</Text>
            <Text note>{authors.join(', ')}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={{ height: 300, flex: 1, resizeMode: 'contain' }} source={{ uri: image }} />
      </CardItem>
      <CardItem>
        <Icon
          onPress={() => { props.save(_id); }}
          name="heart"
          style={{ color: '#ED4A6A' }}
        />
        <Text> Save </Text>
      </CardItem>
    </Card>
  );
};
