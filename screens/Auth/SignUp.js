import React, { Component } from 'react';
import { Image, View } from "react-native"; 
import { Container, Content, Body, Icon, Title, Form, Item, Input, Label, Text, Thumbnail, Button } from 'native-base';
import { NavigationActions } from "react-navigation";
import { ImagePicker, Permissions } from 'expo';
import API from "../../utils/API";
import Header from "../../components/Header"

export default class SignUp extends Component {
    static navigationOptions = {
      header: Header,
    };

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        photoUri: ''
    }

    signUp = () => {
      // deconstruct state object
      const { username, password, firstName, lastName, photoUri } = this.state;

      // create newUser object to be sent to database
      const newUser = {
        username,
        password,
        firstName,
        lastName,
        photoUri
      };

      API.registerUser(newUser)
          .then(res => {
              console.log("SUCCESSFUL SIGNUP")
              this.handleLoginRedirect(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    }

    _pickImage = async () => {

        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
                base64: true
            });
    
            if (!result.cancelled) {
                this.setState({ photoUri: result.uri });
            }
        } else {
            throw new Error('Camera roll permission not granted');
        }
    };

    handleLoginRedirect = (userObj) => {
        const navigateAction = NavigationActions.navigate({
          routeName: "Login",     
          params: {data: userObj}
        });
        this.props.navigation.dispatch(navigateAction);
        // this.props.navigation.goBack();
      };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input name='username' onChangeText={(value) => this.setState({username: value})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(value) => this.setState({password: value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>First Name</Label>
              <Input onChangeText={(value) => this.setState({firstName: value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input onChangeText={(value) => this.setState({lastName: value})}/>
            </Item>
            <Item fixedLabel disabled style={{paddingTop: "10%", justifyContent: "flex-end"}}>
              <Label>Profile Picture</Label>
            
              <Text note style={{marginRight: '20%'}}>{this.state.photo ? "uploaded profile picture" : null}</Text>
            </Item>
            <Button 
              onPress={this._pickImage}
              block
              style={{ margin: 5, backgroundColor: '#00CE9F' }}
            >
              <Text>
                Upload user picture
              </Text>
            </Button>
            <View style={{justifyContent: 'center'}}>
              {/* {this.state.image === null ? null :
                <Image large source={{ uri: this.state.image }} resizeMethod='scale' resizeMode='contain' style={{width: '100%', height: 200}}/>}   */}
            </View>
            <View>
              <Button
                onPress={this.signUp}
                block
                style={{ marginLeft: 5, marginRight: 5, backgroundColor: '#00CE9F' }}
              >
                <Text>
                  Sign Up
                </Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}