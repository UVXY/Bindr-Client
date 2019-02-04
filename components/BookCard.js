import React, { Component } from 'react';
import {
  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Body, Right
} from 'native-base';

export default BookCard = (props) => {
  const {
    _id, title, subtitle, image, authors, genre
  } = props.data;

  return (
    <Content>
      <Card style={{ flex: 1 }}>
        <CardItem>
          <Thumbnail
            square
            style={{ height: 65, resizeMode: 'contain' }}
            source={{ uri: image || require('../assets/images/reader-310398_640.png') }}
          />
          <Body style={{ marginLeft: '3%' }}>
            <Text>{title}</Text>
            <Text note>{subtitle}</Text>
            <Text>
              Author(s):
              {' '}
              {authors}
            </Text>
            <Text>{`Genre: ${genre.join(', ')}`}</Text>
          </Body>
          <Right>
            <Icon
              onPress={() => {
                props.unsave(_id);
                props.handler();
              }}
              name="close"
              style={{ color: '#ED4A6A', marginRight: 20 }}
            />
            <Text>Remove</Text>
          </Right>
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
    </Content>
  );
};
