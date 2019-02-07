import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Container, Body, Icon, Title, Form, Item, Input, Label, Button, Text } from 'native-base';
import API from '../../utils/API';
import Header from '../../components/Header';

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: Header
  };

  state = {
    username: '',
    password: ''
  }

  goToMain = (userObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Saved',
      params: { data: userObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  signUp = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'SignUp'
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  login = () => {
    API.login(this.state)
      .then(res => this.goToMain(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
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
            block
            style={{ margin: 5, backgroundColor: '#00CE9F' }}
            onPress={() => this.login()}
          >
            <Text>
              Login
            </Text>
          </Button>
          <Button
            block
            style={{ marginLeft: 5, marginRight: 5, backgroundColor: '#00CE9F' }}
            onPress={() => this.signUp()}
          >
            <Text>
              Register
            </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
