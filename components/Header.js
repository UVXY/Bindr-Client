import React, { Component } from 'react';
import { Drawer } from 'native-base';
import {
  Header, Body, Left, Button, Icon, Title
} from 'native-base';


export default function HeaderMenu() {
  return (
    <Header>
      <Body>
        <Title style={{ fontSize: 38 }}>
          {' '}
          Bindr
          <Icon style={{ fontSize: 42, color: '#ffffff' }} name="book" />
        </Title>
      </Body>
    </Header>
  );
}
