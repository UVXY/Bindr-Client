import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card, CardItem, Text, Left, Body, Icon, Button 
} from 'native-base';

export default RecommendationCard = (props) => {
  const { title, image, authors, _id } = props.data;

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
        <Button
          transparent
          textStyle={{ color: '#87838B' }}
          onPress={() => props.detail(props.data, props.save, props.comment)}
        >
          <Icon name="navigate" />
          <Text
            style={{ paddingLeft: 0 }}
          >
            Book Detail
          </Text>
        </Button>
      </CardItem>
    </Card>
  );
};
