import React from 'react';
import {
  Container, Header, Body, Right, Button, Icon, Title
} from 'native-base';

export default function HeaderIconExample() {
  return (
    <Container>
      <Header>
        <Body>
          <Title style={{ fontSize: 38 }}>
            {' '}
            Bindr
            <Icon style={{ fontSize: 42, color: '#ffffff' }} name="book" />
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon style={{ fontSize: 30 }} name="search" />
          </Button>
        </Right>
      </Header>
    </Container>
  );
}
