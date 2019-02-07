import React, { Component } from 'react'
import { Image, Linking, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Icon, Textarea, View } from 'native-base';
import { DocumentPicker} from 'expo';
import API from '../utils/API';
import CommentContainer from "../components/CommentContainer";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class BookDetail extends Component {
  // static navigationOptions = {
  //   header: null,
  // };

  state = {
    content:"",
    audioURI: "",
    audioName: "",
    audio: false,
    hideComments: true,
    book: {}
  }

  componentWillMount() {
    this.props.navigation.addListener(
      'willFocus',
      this.getBook
    );
  }

  getBook = () => {
    const id = this.props.navigation.state.params.id
    API.getBookByID(id)
      .then(res => this.setState({ book: res.data[0] }));
  }

  _pickDocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({
        type:'audio/*',
        copyToCacheDirectory: false
      });
      if (result.type !== 'cancel') {
        this.setState({ 
          audioURI: result.uri,
          audioName: result.name,
          audio: true
        });
      }
  }

  comment = (newComment) => {
    if (newComment.audio) {
      API.makeAudioComment(newComment);
    } else {
      API.makeComment(newComment);
    }
  }

  _unpickDocument = () => {
    this.setState({ 
      audioURI: "",
      audioName: "",
      audio: false
    });
}

  render() {
    let summary = this.state.book.summary;
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
    } = this.state.book

    if (this.state.book.title === undefined){
      return <Text>Loading...</Text>;
    }

    if (summary.length === 0) {
      summary.push("No summary available.")
    } else {
      summary = Array.prototype.slice.call(this.state.book.summary);
    }
    return (
      <ScrollView style={{margin: 5, flex:1, backgroundColor: 'white'}} ref = 'scroll'>
        <KeyboardAvoidingView behavior='position' style = {{backgroundColor: 'white', flex: 1}}>
          <View>
          <Image 
              source={{uri: image}} 
              resizeMode='contain' 
              resizeMethod='scale' 
              style={{flex: 1, width: '100%', height: 250}} 
            />
            <Text style={{fontSize: 24}}>{title}</Text>
            <Text note style={{fontSize: 24}}>{subtitle}</Text>
            <Text note style={{fontSize: 20}}>{`By ${authors.join(", ")}`}</Text>
          </View>
          <View>
            <Image 
              source={{uri: image}} 
              resizeMode='contain' 
              resizeMethod='scale' 
              //style={{flex: 1, width: '100%', height: 250}} 
            />
            <Text style={{fontSize: 12}}>{`Genre: ${genre.join(", ")}`}</Text>
            <Text style={{fontSize: 12}}>{`Pages: ${pages}`}</Text>
            <Text style={{fontSize: 12}}>{`ISBN: ${isbn}`}</Text>
            <Text style={{marginTop: '4%'}}>
              Synopsis: {summary.join("\n")}
            </Text>
            <Button
              transparent
              onPress={() => {
                Linking.openURL(infoLink).then(() => {
                  console.log('Opening link')
                }).catch(err => console.error('An error occurred', err));
            }}>
              <Icon
                name="navigate"
                style={{ color: '#AF33FF' }}
              />
              <Text
                style={{ paddingLeft: 0, color: '#AF33FF' }}
              >
                More Info
              </Text>
            </Button>
          </View>
          <View>
            <View
              style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
              }}
            />
            <Text 
              style={{fontWeight: 'bold',fontSize: 16}}
              onPress={() => this.setState({hideComments: !this.state.hideComments})}
            >
              {comments.length < 1 ? null : this.state.hideComments ? "Show" : "Hide"} {comments.length} Comment(s)
            </Text>
            {this.state.hideComments ? null : <CommentContainer comments={comments}/>}
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginBottom: 20
            }}/>
          <View>
            <Text>New Comment</Text>
            <Textarea
              onChangeText={(value) => this.setState({content: value})} 
              name="content" 
              rowSpan={3} 
              width="100%"
              bordered 
              placeholder="Comment..." 
            />
            <View style={{
              flexDirection: 'row',
              margin: 5
            }}>
              <Button
                title="Audio Comment"
                onPress={this._pickDocument}
                style={{ backgroundColor: '#00CE9F' }}
              >
                <Text>{this.state.audioURI.length < 1 ? "Select a file to upload" : this.state.audioName}</Text>
              </Button>
              {this.state.audioURI.length > 0 ?  
              <Button title="cancel" onPress={this._unpickDocument}><Text>X</Text></Button> : 
              null}
            </View>
            <Button
              onPress={()=> (this.comment({
                content: this.state.content,
                audioURI: this.state.audioURI,
                audioName: this.state.audioName,
                audio: this.state.audio,
                id: _id
              }))}
              style={{
                margin: 5,
                backgroundColor: '#00CE9F'
              }}
              title="Submit Comment">
              <Text>Submit</Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
