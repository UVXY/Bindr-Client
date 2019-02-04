import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { DeckSwiper, View, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Header from '../components/Header';
import RecommendationCard from '../components/RecommendationCard';
import API from '../utils/API';

export default class Recommendation extends Component {
  static navigationOptions = {
    header: Header,
  };
  state = {
    recommendations: [],
    user: null
  }

  componentWillMount() {
    this.getRecommendations();
    API.getUser()
    .then((res) => {
      this.setState({
        user: res.data
      })
    });
  }

  comment = (newComment) => {
    API.makeComment(newComment);
  }

  bookDetail = (bookObj, saveFn, mkCmnt) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "BookDetail",
      params: { 
        data: bookObj,
        save: saveFn,
        user: this.state.user,
        comment: mkCmnt
      }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  getRecommendations = () => {
    API.getRecommendations()
      .then(res => this.setState({ recommendations: res.data }));
  }

  render() {
    const { recommendations } = this.state;
    // HACK: workaround for a bug when first render has empty recommendations
    if (recommendations.length === 0) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <DeckSwiper
          dataSource={recommendations}
          renderItem={(recommendation) => {
            return <RecommendationCard 
              key={recommendation._id} 
              data={recommendation} 
              save={API.saveBook} 
              detail={this.bookDetail}
              comment={this.comment}
            />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  contentContainer: {
    padding: 10
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  }
});
