import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { Container, Header, Content, Body, Icon, Title, Form, Item, Input, Label } from 'native-base';
import API from "../../utils/API";

export default class SignInScreen extends Component {
    static navigationOptions = {
      header: null,
    };

    state = {
        username: '',
        password: ''
    }

    goToMain = (userObj) => {
      const navigateAction = NavigationActions.navigate({
        routeName: "Survey",
        params: { data: userObj }
      });
      this.props.navigation.dispatch(navigateAction);
      // this.props.navigation.goBack();
    }

    signUp = () => {
        const navigateAction = NavigationActions.navigate({
          routeName: "Recommendations",
        });
        this.props.navigation.dispatch(navigateAction);
        // this.props.navigation.goBack();
      }

    login = () => {
        API.login(this.state)
        .then(res => this.goToMain(res.data))
        .catch(err => console.log(err))
    }

  render(){
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{ fontSize: 38 }}> Bindr 
              <Icon style={{ fontSize: 42, color: "#ffffff" }}
                name="book" />
            </Title>
          </Body>
        </Header>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(value) => this.setState({username: value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(value) => this.setState({password: value})}/>
            </Item>
            <Button
                title="Login"
                onPress={() => this.login()}
            />
            <Button
                title="Register"
                onPress={() => this.signUp()}
            />
          </Form>
      </Container>
    )
  }
  };