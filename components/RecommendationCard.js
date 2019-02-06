import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card, CardItem, Text, Left, Body, Icon, Button, View
} from 'native-base';

export default RecommendationCard = (props) => {
  const { title, image, authors, _id } = props.data;

  return (
    <View>
      <Card style={{ elevation: 3, marginLeft: 25, marginRight: 25 }}>
        <CardItem>
          <Left>
            <Body>
              <Text>{title}</Text>
              <Text note>{authors.join(', ')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Text style={{ fontSize: 30, marginLeft: 20 }}>&lt;</Text>
          <Image style={{ height: 200, flex: 1, resizeMode: 'contain' }} source={{ uri: image }} />
          <Text style={{ fontSize: 30, textAlign: 'right', marginRight: 20  }}>&gt;</Text>
        </CardItem>
        <CardItem>
          <Button
            transparent
            textStyle={{ color: '#87838B' }}
            onPress={() => props.detail(props.data, props.save, props.comment)}
          >
            <Icon name="navigate" />
            <Text style={{ paddingLeft: 0 }}>
              Book Detail
            </Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  );
};
