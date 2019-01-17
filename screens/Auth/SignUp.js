import React, { Component } from 'react';
import { Button, Image, View } from "react-native"; 
import { Container, Header, Content, Form, Item, Input, Label, Text, Thumbnail } from 'native-base';
import { NavigationActions } from "react-navigation";
import { ImagePicker, Permissions } from 'expo';
import API from "../../utils/API";

export default class SignUp extends Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        photo: ''
    }

    signUp = () => {
        // deconstruct state object
        const { username, password, firstName, lastName, photo } = this.state;

        // create newUser object to be sent to database
        const newUser = { username, password, firstName, lastName, photo };

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
            });
    
            console.log(result);
    
            if (!result.cancelled) {
                this.setState({ photo: result.uri });
            }
        } else {
            throw new Error('Camera roll permission not granted');
        }
    };

    handleLoginRedirect = (userObj) => {
        const navigateAction = NavigationActions.navigate({
          routeName: "Home",
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
            <Button onPress={this._pickImage} title="Upload from Photo Library" />
            <View style={{justifyContent: 'center'}}>
              {/* {this.state.image === null ? null :
                <Image large source={{ uri: this.state.image }} resizeMethod='scale' resizeMode='contain' style={{width: '100%', height: 200}}/>}   */}
            </View>
            <View>
               <Button onPress={this.signUp} title="Sign Up" /> 
            </View>
          </Form>
         
          
            
        </Content>
      </Container>
    );
  }
}