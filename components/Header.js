import React, { Component } from 'react';

import {
  Header, Body, Icon, Title
} from 'native-base';


export default function HeaderMenu() {
  return (
    <Header>
      <Body>
        <Title style={{ fontSize: 38, paddingTop: 20, alignSelf: "center" }}>
          Bindr
          <Icon style={{ fontSize: 42, color: '#ffffff' }} name="book" />
        </Title>
      </Body>
    </Header>
  );
}
