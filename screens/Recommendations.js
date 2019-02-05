import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { DeckSwiper, View, Text, Title, Button, Content } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import Header from '../components/Header';
import RecommendationCard from '../components/RecommendationCard';
import API from '../utils/API';

class Recommendation extends Component {
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
    if (newComment.audio) {
      API.makeAudioComment(newComment);
    } else {
      API.makeComment(newComment);
    }
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
        <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 20 }}>
          <Title style={{ fontSize: 20, backgroundColor: '#00CE9F', textAlign: 'left', paddingLeft: 10 }}>
            Swipe left to view a new book, right to save
          </Title>
          <DeckSwiper
            onSwipeRight={(itm) => API.saveBook(itm._id)}
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
            <Text>Restart surveys for new recommendations</Text>
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
