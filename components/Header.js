import React, { Component } from 'react';

import {
  Header, Body, Icon, Title
} from 'native-base';


export default function HeaderMenu() {
  return (
    <Header style={{ backgroundColor: '#FFB233' }}>
      <Body>
        <Title style={{ fontSize: 33, paddingTop: 15, alignSelf: "center" }}>
          Bindr
          <Icon style={{ fontSize: 37, color: '#ffffff' }} name="book" />
        </Title>
      </Body>
    </Header>
  );
}
