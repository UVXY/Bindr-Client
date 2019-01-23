import React, { Component } from 'react';
import {
  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Body, Right 
} from 'native-base';

export default BookCard = (props) => {
  const {
    _id, title, subtitle, summary, image, authors, genre, infoLink, comments, lists 
  } = props.data;

  return (
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Thumbnail square style={{ height: 65, resizeMode: 'contain' }} source={{ uri: image || require('../assets/images/reader-310398_640.png') }} />
          <Body style={{ marginLeft: '3%' }}>
            <Text>{title}</Text>
            <Text note>{subtitle}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              Author(s):
              {' '}
              {authors}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
            <Text>
              Synposis: 
              {' '}
              {summary ? summary.slice(0, 200) : "Not available"}
              {' '}
              ...
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Button
            transparent
            textStyle={{ color: '#87838B' }}
            onPress={() => props.bookDetail(props.data)}
          >
            <Icon name="navigate" />
            <Text>Book Detail</Text>
          </Button>
          <Right>
            <Icon
              onPress={() => {
                props.unsave(_id);
                props.handler();
              }}
              name="remove"
              style={{ color: '#ED4A6A' }}
            />
            <Text>Remove</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};
