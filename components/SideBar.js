import PropTypes from 'prop-types';
import React, {Component} from 'react';
// import styles from './Sidebar.style';
import { Container, Header, Content, Button} from 'native-base';
import {NavigationActions} from 'react-navigation';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideBar extends Component {
  // navigateToScreen = (route) => () => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: route
  //   });
  //   this.props.navigation.dispatch(navigateAction);
  // }

  render () {
    return (
      
      <View >
        <ScrollView style={styles.container}>
        {/* <Text style={styles.text}>Side Menu</Text> */}
          <Button style={styles.button} block light><Text> Light </Text></Button>
          <Button style={styles.button} block primary><Text> Primary </Text></Button>
          <Button style={styles.button} block success><Text> Success </Text></Button>
          <Button style={styles.button} block info><Text> Info </Text></Button>
          <Button style={styles.button} block warning><Text> Warning </Text></Button>
          <Button style={styles.button} block danger><Text> Danger </Text></Button>
          <Button style={styles.button} block dark><Text> Dark </Text></Button>
            
        </ScrollView>
        {/* <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View> */}
      </View>
    );
  }
}

SideBar.propTypes = {
  navigation: PropTypes.object
};

export default SideBar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      marginRight: 5,
    },
    text: {
      color: "#fff",
      marginTop: 50,
      marginLeft: 10,
    },
    sideImage: {
      width: "100%",
      height: 100,
      margin: 10,
      opacity: 0.7,
    },
    button: {
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    }
  });