import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing, TouchableHighlight } from 'react-native';
import { Text } from 'native-base';

const width = 375;
const height = 667;
const size = 5; // five by five grid
const cellSize = Math.floor(width * 0.2); // 20% of the screen width
const cellPadding = Math.floor(cellSize * 0.05); // 5% of the cell size
const borderRadius = cellPadding * 2;
const tileSize = cellSize - cellPadding * 2;
const letterSize = Math.floor(tileSize * 0.75);

export default class Board extends Component {
  state = {
    selectedLetters: []
  }

  checkValidSelection() {
    console.log("TO DO")
  }

  handleLetterPress(letter) {
    const { selectedLetters } = this.state;
    selectedLetters.push(letter);
    this.setState(selectedLetters);
    console.log(selectedLetters);
  }

  renderTile(id, style, letter) {
    return (
      <Animated.View
        key={id}
        style={[styles.tile, style]}
        onStartShouldSetResponder={() => { this.handleLetterPress(letter); }}
      >
        <Text style={styles.letter}>
          {letter}
        </Text>
      </Animated.View>
    );
  }

  renderTiles() {
    const result = [];
    // const search = wordsearch(['rain', 'scary', 'romance'], 5, 5);
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const id = row * size + col;
        const letter = String.fromCharCode(65 + id);
        const style = {
          left: col * cellSize + cellPadding,
          top: row * cellSize + cellPadding
        };
        result.push(this.renderTile(id, style, letter));
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
    width: cellSize * size,
    height: cellSize * size,
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
  letter: {
    color: '#333',
    fontSize: letterSize,
    backgroundColor: 'transparent'
  }
});
