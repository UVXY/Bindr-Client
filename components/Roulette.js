import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Left
} from 'native-base';

// export default class reactApp extends Component {
    let words = ["escapology", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", 
    "newfangled", "flugelhorn", "mythologer", "pluperfect", "jellygraph", "quickthorn", "rottweiler", 
    "technician", "cowpuncher", "middlebrow", "jackhammer", "triphthong", "wunderkind", "dazzlement", 
    "jabberwock", "witchcraft", "pawnbroker", "thumbprint", "motorcycle", "cryptogram", "torchlight",
    "bankruptcy"];
    let NumberOfWords = 28
    let words = new BuildArray(NumberOfWords)
export default class HomeScreen extends Component {

    state = {
        words: "Original text",
      };
    // NumberOfWords = 28
    
    //  words = new BuildArray(NumberOfWords)

    // Use the following variables to 
    // define your random words:
    // words[1] = "escapology"
    // words[2] = "brightwork"
    // words[3] = "verkrampte"
    // words[4] = "protectrix"
    // words[5] = "nudibranch"
    // words[6] = "grandchild"
    // words[7] = "newfangled"
    // words[8] = "flugelhorn"
    // words[9] = "mythologer"
    // words[10] = "pluperfect"
    // words[11] = "jellygraph"
    // words[12] = "quickthorn"
    // words[13] = "rottweiler"
    // words[14] = "technician"
    // words[15] = "cowpuncher"
    // words[16] = "middlebrow"
    // words[17] = "jackhammer"
    // words[18] = "triphthong"
    // words[19] = "wunderkind"
    // words[20] = "dazzlement"
    // words[21] = "jabberwock"
    // words[22] = "witchcraft"
    // words[23] = "pawnbroker"
    // words[24] = "thumbprint"
    // words[25] = "motorcycle"
    // words[26] = "cryptogram"
    // words[27] = "torchlight"
    // words[28] = "bankruptcy"

     updateText =() =>{
        this.setState({words: 'My Changed Text'})
     }
     BuildArray =(size)=> {
        this.length = size
        for (var i = 1; i <= size; i++) {
            this[i] = null
        }
        return this
    }

    PickRandomWord=(frm)=>{
        // Generate a random number between 1 and NumberOfWords
        var rnd = Math.ceil(Math.random() * NumberOfWords)

        // Display the word inside the text box
        frm.WordBox.value = words[rnd]
    }
    render() {
    return (
        <Container>
            {/* <Input NAME="WordForm">  
<INPUT TYPE=TEXT NAME="WordBox" id="wordbox">
<INPUT TYPE=BUTTON VALUE="Generate" onClick="PickRandomWord(document.WordForm);" id="button">
                 */}
        <Header />
        <Content>
          {/* <Form>
            <Item floatingLabel>
              <Label>Username</Label>
            </Item>
            <Button onPress= {() => this.PickRandomWord}>
            <Text> Press for Word </Text>
            </Button>
          </Form> */}
          <Text style={styles.textContent} onPress = {this.updateText}>
             {this.state.words}
          </Text>
        </Content>
      </Container>   
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    textContent: {
        fontSize: 20,
        color: 'red',
    },
})