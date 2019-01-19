import React from 'react';
import { View, Button } from 'react-native';
import { Container, Header, Item, Input, Icon, Text, Left } from 'native-base';

export default SearchBar = (props) => {
    return (
      <View>
        <Header searchBar rounded>
        
            <Icon style={{padding: '2%'}}
              onPress={props.logout}
              name="ios-person" />
          <Item>
            <Icon name="ios-search" />
            <Input 
                placeholder="Search" 
                onChangeText={props.handleInputChange}
            />
            {/* <Icon name="ios-people" /> */}
          </Item>
          <Button 
            onPress={props.search}
            title="Go"
          >
            <Text>Search</Text>
          </Button>
        </Header>
      </View>
    );
  }