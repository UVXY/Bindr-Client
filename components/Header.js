import React, { Component } from 'react';

import {
  Header, Body, Icon, Title
} from 'native-base';


export default function HeaderMenu() {
  return (
    <Header style={{ backgroundColor: '#FFB233' }}>
      <Body>
        <Title style={{ fontSize: 30, paddingTop: 13, alignSelf: 'center', color: '#ffffff', fontWeight: 'bold' }}>
          Bindr
          <Icon style={{ fontSize: 34, color: '#ffffff' }} name="book" />
        </Title>
      </Body>
    </Header>
  );
}
