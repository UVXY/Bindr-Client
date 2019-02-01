import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, Header, Title, Subtitle, Container, Body } from 'native-base';

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
  "travel", "wandering", "lost", "best", "earliest-list", "favourites", "writer", "sad", "crying", "death", 
  "learning", "technology", "help", "comedy", "funny", "humor", "humour", "satire", "old", "ancient",
  "storm", "cloudy", "celebrity", "movies", "blond", "fantasy", "sci-fi", "science-fiction", "sf",
  "classics", "business", "career", "creativity", "fitness", "happiness", "health", "love", "non-fiction", "nonfiction",
  "productivity", "relationships", "romance", "self-help", "success", "wellness", "baseball", "sports",
  "book club", "historical", "literary", "summer", "sunny", "clear", "warm", "autumn", "books", "coffee", 
  "creep", "creepy", "dark", "fall", "fireplace", "freaky", "halloween", "leaves", "november", "october", "pumpkin",
  "rain", "rainy", "reading", "scary", "september", "spooky", "sweater", "tea", "thanksgiving", "intrigue", 
  "mystery", "thriller", "fiction", "seasons", "setting", "weather", "winter", "cold", "warmup"
];

export default class Board extends Component {
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
    const { selectedLetters } = this.state;
    const letters = selectedLetters.map(x => x[0]);
    const sortedLetters = letters.sort().join('');

    for (const word of words) {
      if (word.length !== selectedLetters.length) {
        continue;
      }

      if (word.split('').sort().join('') === sortedLetters) {
        console.log(word);
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
      <Container style={{ flex:1 }}>
        <Header style={{ backgroundColor: '#00CE9F' }}>
          <Body>
          <Title style={{ fontSize: 28 }}>
            {' '}
            Select two words
          </Title>
          <Subtitle>
            (Hint: Words may be backwards or diagonal)
          </Subtitle>
          </Body>
        </Header>

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
