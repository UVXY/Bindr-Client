import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { DeckSwiper, View, Text, Title, Button } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import { Location, Permissions, Constants } from 'expo';
import axios from 'axios';
import Header from '../components/Header';
import RecommendationCard from '../components/RecommendationCard';
import API from '../utils/API';
import Spinner from '../components/Spinner';

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
        this.getUserLocation();
      }
    );
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
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.getRecommendations();
      } else {
        const location = await Location.getCurrentPositionAsync({});
        this.setState({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
        this.getWeather();
      }
    } else { this.getRecommendations(); }
  }

  getWeather = () => {
    const url = `https://api.darksky.net/forecast/${apiKey}/${this.state.latitude},${this.state.longitude}`;
    axios
      .get(url, { timeout: 5000 })
      .then((res) => {
        //Our tags:  "storm", "cloudy", "sunny", "clear", "warm", "rain", "rainy", "cold"
        //API contains tags: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night
        let weather = res.data.currently.icon;

        if  //Storm
        ( (weather == "thunderstorm") || 
          (res.data.alerts.severity == "warning") || 
          ((res.data.currently.nearestStormDistance == 0) &&
             (res.data.currently.summary != "Drizzle"))
        )
          {weather = "storm"}
        else if // Full Moon
        (
            res.data.daily.data[0].moonPhase == 0.5
        )
          {weather = "creepy"}
        else if //Cold
        (
          res.data.currently.apparentTemperature < 45 ||
          weather == "snow" ||
          weather == "sleet"
        )
          {weather = "cold"}
        else if //Cloudy
        (
          weather == "partly-cloudy-day"|| 
          weather == "partly-cloudy-night"||
          weather == "cloudy"
        )
          {weather = "cloudy"}
        else if  //sunny
        (
          weather == "clear-day" &&
          res.data.currently.time > res.data.daily.data[0].sunriseTime &&
          res.data.currently.time < res.data.daily.data[0].sunsetTime &&
          res.data.currently.uvIndex > 3
        )
          {weather = "sunny"}
        else if  //Warm
        (
          res.data.currently.apparentTemperature > 80 && //feels like in Fahrenheit
          weather == "clear-day"
        )
          {weather = "warm";}
        else if 
        (
          weather == "rain"
        )
          {weather = "rain";} //rainy
        else {weather = "clear";}

        this.state.bookTags.push(weather);
        this.setState({
          bookTags: this.state.bookTags
        });

        this.getRecommendations();
      })
      .catch(
        err => {
          console.log(err);
          this.getRecommendations();
        }
      );
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
  }

  render() {
    const { recommendations } = this.state;
    // HACK: workaround for a bug when first render has empty recommendations
    if (recommendations.length === 0) {
      return (
        <Spinner />
      );
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Title style={{ backgroundColor: '#00CE9F' }}>
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
