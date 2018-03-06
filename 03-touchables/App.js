import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>11</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={this.handleButtonPress}>
            <Text style={styles.text}>12</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  box: {
    backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100
  },
  text: {
    color: "#fff",
    fontSize: 36
  }
});
