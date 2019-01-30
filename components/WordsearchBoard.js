import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text } from 'native-base';

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

export default class Board extends Component {
  state = {
    selectedLetters: [],
    puzzleGrid: []
  }

  componentWillMount() {
    const words = ['rain', 'scary', 'happy', 'romance', 'love', 'vacation'];
    this.setState({
      puzzleGrid: wordsearch(words, 5, 7, wordsearch.opts = { backwords: 0.4 }).grid
    });
  }

  checkValidSelection(id, letter) {
    const { selectedLetters } = this.state;
    console.log("valid");
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
    console.log(selectedLetters);
    // checkValidSelection(id, letter);
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
      <View style={styles.container}>
        {this.renderTiles()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: cellSize * gridWidth,
    height: cellSize * gridHeight,
    backgroundColor: 'transparent'
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
