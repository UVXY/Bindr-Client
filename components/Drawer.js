import { Drawer } from 'native-base';
import SideBar from './SideBar';
import {

  StyleSheet
} from 'react-native';
import React, { Component } from 'react';
export default class DrawerExample extends Component {
    // why is this not working in native base version?
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
  render() {
    
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
      <Text> Main View</Text>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: "#ff0000",
    marginLeft:20
  }
});