import React, { Component } from 'react'
import { Image, Linking } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Body, Form, Item, Radio, Textarea, View } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Comment from "../components/Comment";

export default class BookDetail extends Component {
  // static navigationOptions = {
  //   header: null,
  // };

  state = {
    content:"",
    audio: false
}

  render() {
    const summary = Array.prototype.slice.call(this.props.navigation.state.params.data.summary);
    const save = this.props.navigation.state.params.save;
    const submitComment = this.props.navigation.state.params.comment;
    const { 
      _id, 
      title, 
      subtitle,  
      image, 
      authors, 
      genre, 
      infoLink, 
      comments, 
      isbn ,
      pages,
    } = this.props.navigation.state.params.data;
    if (summary.length === 0) {
      summary.push("No summary available.")
    }

    return (
      <Container>
        <Content>
          <Card style={{flex: 1}}>
            <CardItem>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Grid>
                    <Col size={85}>
                      <Text style={{fontSize: 24}}>{title}</Text>
                      <Text note style={{fontSize: 24}}>{subtitle}</Text>
                      <Text note style={{fontSize: 20}}>{`By ${authors.join(", ")}`}</Text>
                    </Col>
                    <Col size={15}>
                    <Icon
                      onPress={() => { save(_id); }}
                      name="heart"
                      style={{ color: '#ED4A6A' }}
                      />
                    </Col>
                  </Grid>
                </Body> 
            </CardItem>
            <CardItem>
              <Body>
                <Grid>
                  <Row>
                    <Col size={75}>
                      <Image source={{uri: image}} resizeMode='contain' resizeMethod='scale' style={{flex: 1, width: '100%', height: 250}} />
                    </Col>
                    <Col size={25}>
                      <Text style={{fontSize: 10}}>{`Genre: ${genre.join(", ")}`}</Text>
                      <Text style={{fontSize: 10}}>{`Pages: ${pages}`}</Text>
                      <Text style={{fontSize: 10}}>{`ISBN: ${isbn}`}</Text>
                    </Col>
                  </Row>
                  <Text style={{marginTop: '4%'}}>
                    Synopsis: {summary.join("\n")}
                  </Text>
                </Grid>
              </Body>
              
            </CardItem>
            <CardItem>
              <Button 
                  transparent 
                  textStyle={{color: '#87838B'}}
                  onPress={() => {
                      Linking.openURL(infoLink).then(() => {
                          console.log('Opening link')
                        }).catch(err => console.error('An error occurred', err));
                  }}>
                <Icon name="navigate" />
                <Text>More Info</Text>
              </Button>
            </CardItem>
            <Grid>
              <Row>
                <Text style=
                {{
                  fontWeight: 'bold',
                  fontSize: 12
                }}>Comment(s):</Text>
                <Grid>
                  {comments.map(each => (
                    <Row key={each._id}>
                      <Comment 
                        author={each.author}
                        content={each.content}
                        audio={each.audio}
                        contentLink={each.contentLink}
                      />
                    </Row>
                  ))}
                </Grid>
                {/* <Button 
                    transparent 
                    textStyle={{color: '#87838B'}}
                    onPress={() => {
                        Linking.openURL(infoLink).then(() => {
                            console.log('Opening link')
                          }).catch(err => console.error('An error occurred', err));
                    }}>
                  <Icon name="navigate" />
                  <Text>More Info</Text>
                </Button> */}
              </Row>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
              <Row>
                <Form>
                  <Text>New Comment</Text>
                  <Item>
                    <Textarea 
                      onChangeText={(value) => this.setState({content: value})} 
                      name="content" 
                      rowSpan={5} 
                      width="100%"
                      bordered 
                      placeholder="Comment..." 
                    />
                  </Item>
                  <Item>
                    <Radio 
                      onPress={(value) => (this.setState({audio: value}))} 
                      name="audio" 
                      selected={false}
                      color={"#f0ad4e"}
                      selectedColor={"#5cb85c"}
                    />
                  </Item>
                  <View>
                    <Button onPress={()=> (submitComment({
                      content: this.state.content,
                      audio: this.state.audio,
                      id: _id
                    }))} title="Submit Comment">
                      <Text>Submit</Text>
                    </Button> 
                  </View>
                </Form>
              </Row>
            </Grid>
          </Card>
        </Content>
      </Container>
    )
  }
}