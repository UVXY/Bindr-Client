import React, { Component } from 'react'
import { Image, Linking } from 'react-native';
import { Text, Button, Icon, Textarea, View } from 'native-base';
import CommentContainer from "../components/CommentContainer";
import { DocumentPicker, Permissions } from 'expo';
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
    hideComments: true
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
      <View style={{margin: 5}}>
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
            textStyle={{color: '#87838B'}}
            onPress={() => {
              Linking.openURL(infoLink).then(() => {
                console.log('Opening link')
              }).catch(err => console.error('An error occurred', err));
          }}>
            <Icon name="navigate" />
            <Text>More Info</Text>
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
            {this.state.hideComments ? "Show" : "Hide"} {comments.length} Comment(s)
          </Text>
          {this.state.hideComments ? null : <CommentContainer comments={comments}/>}
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            marginBottom: 20
          }}
        />
        <KeyboardAwareScrollView>
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
            <Button
              title="Audio Comment"
              onPress={this._pickDocument}
            >
              <Text>Select a sound file</Text>
            </Button>
            <Button onPress={()=> (submitComment({
              content: this.state.content,
              audioURI: this.state.audioURI,
              audioName: this.state.audioName,
              audio: this.state.audio,
              id: _id
            }))} title="Submit Comment">
              <Text>Submit</Text>
            </Button>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}
