import PropTypes from 'prop-types';
import React, {Component} from 'react';
// import styles from './Sidebar.style';
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
          <View>
            <Text>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
              <Text>
              Page1
              </Text>
            </View>
          </View>
          <View>
            <Text>
              Section 2
            </Text>
            <View style={styles.navSectionStyle}>
              <Text>
                Page2
              </Text>
              <Text>
                Page3
              </Text>
            </View>            
          </View>
          <View><Text>Section 3</Text>
            <View style={styles.navSectionStyle}>
              <Text>
              Page4
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
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
      paddingTop: 20,
      flex: 1
    },
    navItemStyle: {
      padding: 10
    },
    navSectionStyle: {
      backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    }
  });