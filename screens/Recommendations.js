import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { DeckSwiper, View, Text, Title, Button } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import { Location, Permissions } from 'expo';
import axios from 'axios';
import Header from '../components/Header';
import RecommendationCard from '../components/RecommendationCard';
import API from '../utils/API';
import { Constants } from "expo";

const apiKey = Constants.manifest.extra.darkSky;

class Recommendation extends Component {
  static navigationOptions = {
    header: Header
  };

  state = {
    recommendations: [],
    user: null,
    latitude: null,
    longitude: null,
    bookTags: this.props.navigation.getParam('bookTags', 'best')
  }

  componentWillMount() {
    this.props.navigation.addListener(
      'willFocus',
      () => {
        this.getRecommendations();
      }
    );
    this.getUserLocation();
    API.getUser()
      .then((res) => {
        this.setState({
          user: res.data
        });
      });
  }

  async getUserLocation() {
    const locationEnabled = await Permissions.askAsync(Permissions.LOCATION);

    if (locationEnabled.status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
      this.getWeather();
    }
  }

  getWeather = () => {
    const url = `https://api.darksky.net/forecast/${apiKey}/${this.state.latitude},${this.state.longitude}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        // TODO: add logic
        console.log(res);
        this.state.bookTags.push('new value')
      })
      .catch(err => console.log(err));
  }

  getWeather = () => {
    const url = `https://api.darksky.net/forecast/${apiKey}/${this.state.latitude},${this.state.longitude}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        // TODO: add logic
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  bookDetail = (bookObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "BookDetail",
      params: { 
        id: bookObj._id
      }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  getRecommendations = () => {
    this.state.bookTags.map(tag => (
      API.getBookByTag(tag)
        .then(res => this.setState({ recommendations: res.data }))
    ));
    console.log(this.state.bookTags);
  }

  render() {
    const { recommendations } = this.state;
    // HACK: workaround for a bug when first render has empty recommendations
    if (recommendations.length === 0) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 20 }}>
          <Title style={{ fontSize: 20, backgroundColor: '#00CE9F', textAlign: 'left', paddingLeft: 10 }}>
            Swipe left to browse, right to save
          </Title>
          <DeckSwiper
            onSwipeRight={(itm) => API.saveBook(itm._id)}
            dataSource={recommendations}
            renderItem={(recommendation) => {
              return <RecommendationCard
                key={recommendation._id} 
                data={recommendation}
                detail={this.bookDetail}
                comment={this.comment}
              />;
            }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <Button
            style={{ backgroundColor: '#FFB233', margin: 15 }}
            block
            onPress={() => this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              key: null,
              actions: [NavigationActions.navigate({ routeName: 'Surveys' })]
            }))}
          >
            <Text>Restart</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Recommendation;
