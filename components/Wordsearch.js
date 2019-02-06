import React, { Component } from 'react';
import { View, StyleSheet, Animated, Alert } from 'react-native';
import { Text, Header, Title, Subtitle, Container, Body } from 'native-base';
import { NavigationActions } from 'react-navigation';

const wordsearch = require('wordsearch');

const width = 375;
const height = 667;
const gridWidth = 5;
const gridHeight = 7;
const cellSize = Math.floor(width * 0.2); // 20% of the screen width
const cellPadding = Math.floor(cellSize * 0.05); // 5% of the cell size
const borderRadius = cellPadding * 2;
const tileSize = cellSize - cellPadding * 2;
const letterSize = Math.floor(tileSize * 0.75);
const words = [
  "travel", "lost", "best", "writer", "sad", "crying", "death", "help", "comedy", "funny", "humor", "humour", "satire",
  "old", "ancient", "movies", "blond", "fantasy", "business", "career", "creativity", "fitness", "happiness", "health",
  "love", "romance", "success", "sports", "books", "coffee", "creep", "creepy", "dark", "fall", "freaky", "leaves",
  "pumpkin", "reading", "scary", "spooky", "sweater", "tea", "mystery", "fiction", "seasons", "setting"
];

export default class Wordsearch extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selectedLetters: [],
    puzzleGrid: [],
    wordsChosen: []
  }

  componentWillMount() {
    this.setState({
      puzzleGrid: wordsearch(words, 5, 7, wordsearch.opts = { backwords: 0.4 }).grid
    });
  }

  checkIfWord() {
    const { selectedLetters, wordsChosen } = this.state;
    const letters = selectedLetters.map(x => x[0]);
    const sortedLetters = letters.sort().join('');

    for (const word of words) {
      if (word.length !== selectedLetters.length || wordsChosen.includes(sortedLetters)) {
        continue;
      }

      if (word.split('').sort().join('') === sortedLetters) {
        wordsChosen.push(word);

        if (wordsChosen.length < 2) {
          Alert.alert(
            "You chose '" + word + "'.",
            "Select another word."
          );
        } else {
          Alert.alert(
            "You chose '" + word + "'.",
            "Press OK to move to the next screen.",
            [{ text: 'OK', onPress: () => this.props.recommendations() }],
            { cancelable: false }
          );
        }
        this.setState({ selectedLetters: [] });
      }
    }
    return null;
  }

  handleLetterPress(id, letter) {
    const { selectedLetters } = this.state;
    const index = selectedLetters.findIndex(checkArray => checkArray[1] === id);
    if (index >= 0) {
      selectedLetters.splice(index, 1);
    } else {
      selectedLetters.push([letter, id]);
    }
    this.setState(selectedLetters);
    this.checkIfWord();
  }

  renderTile(id, position, letter) {
    const { selectedLetters } = this.state;
    let isSelected = false;
    if (selectedLetters.findIndex(checkArray => checkArray[1] === id) >= 0) {
      isSelected = true;
    }
    return (
      <Animated.View
        key={id}
        style={isSelected
          ? [styles.selectedTile, position]
          : [styles.tile, position]
        }
        onStartShouldSetResponder={() => { this.handleLetterPress(id, letter); }}
      >
        <Text style={styles.letter}>
          {letter}
        </Text>
      </Animated.View>
    );
  }

  renderTiles() {
    const result = [];
    for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
        const id = row * gridWidth + col;
        const letter = this.state.puzzleGrid[row][col];
        const position = {
          left: col * cellSize + cellPadding,
          top: row * cellSize + cellPadding
        };
        result.push(this.renderTile(id, position, letter));
      }
    }
    return result;
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <View style={{ fontSize: 20, backgroundColor: '#00CE9F', textAlign: 'left', alignItems: 'stretch' }}>
          <Title style={{ fontSize: 20, backgroundColor: '#00CE9F', textAlign: 'left', alignItems: 'stretch' }}>
                Select two words
          </Title>
        </View>
        <View style={styles.container}>
          {this.renderTiles()}
        </View>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: cellSize * gridWidth,
    height: cellSize * gridHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62'
  },
  tile: {
    position: 'absolute',
    width: tileSize,
    height: tileSize,
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
  },
  selectedTile: {
    position: 'absolute',
    width: tileSize,
    height: tileSize,
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1bedc'
  },
  letter: {
    color: '#333',
    fontSize: letterSize,
    backgroundColor: 'transparent'
  }
});
