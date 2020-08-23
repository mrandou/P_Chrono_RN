import React from 'react';
import { AppRegistry, Text, View, Button, TouchableHighlight } from 'react-native';
import { styles, chronoStyle } from "../style/AppStyle"
import { Stopwatch } from 'react-native-stopwatch-timer'

let timer = 0;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      firstTap: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
      currentTime: 0,
      blink: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
       currentTime: timer
      })
    }, 10)
    setInterval(() => {
      this.setState({
       blink: !this.state.blink
      })
    }, 600)
  }

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false, firstTap: true});
  }

  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }

  getFormattedTime(time) {
    this.currentTime = time;
    timer = time
    var split = timer.split(":");
    var chrono = {
      hours: split[0],
      minutes: split[1],
      seconds: split[2],
      ms: split[3],
      // hours: "00",
      // minutes: "00",
      // seconds: "21",
      // ms: "123",
    };
    timer = chrono;
  };

  displayTime = () => {
    if (this.state.currentTime.hours !== "00")
      return (this.displayHr());
    else if (this.state.currentTime.minutes !== "00")
      return (this.displayMin());
    else
      return (this.displaySec());

        {/* <Button title={!this.state.stopwatchStart ? "Start" : "Stop"} color="orange" onPress={this.toggleStopwatch}/> */}
  }

  displayHr = () => {
    return (
      <View>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.hours}>{this.state.currentTime.hours}</Text>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.minutes}>{this.state.currentTime.minutes}</Text>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.seconds}>{this.state.currentTime.seconds}</Text>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.ms}>{this.state.currentTime.ms}</Text>
      </View>
    )
  }

  displayMin = () => {
    return (
      <View>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.minutes}>{this.state.currentTime.minutes}</Text>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.seconds}>{this.state.currentTime.seconds}</Text>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.ms}>{this.state.currentTime.ms}</Text>
      </View>
    )
  }

  displaySec = () => {
    return (
      <View style={chronoStyle.display}>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.seconds}>{this.state.currentTime.seconds}</Text>
        <Text onPress={this.toggleStopwatch} style={chronoStyle.ms}>{this.state.currentTime.ms}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={chronoStyle}
          getTime={this.getFormattedTime} />
        <TouchableHighlight 
          style = { chronoStyle.circle }
          underlayColor = 'transparent'
          onPress = { this.toggleStopwatch }>
            <Text title="" />
        </TouchableHighlight>
        {
          !this.state.stopwatchStart && this.state.firstTap ? this.state.blink ? <this.displayTime/> : null
          : <this.displayTime/>
        }
        {/* <Button title={!this.state.stopwatchStart ? "Start" : "Stop"} color="orange" onPress={this.toggleStopwatch}/> */}
      </View>
    )
  }
};

AppRegistry.registerComponent('Clock', () => Clock);
