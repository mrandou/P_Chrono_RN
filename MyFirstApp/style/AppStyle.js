import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: "30%",
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "orange",
  }
});

export const chronoStyle = {
  container: {
    // backgroundColor: '#000',
    // padding: 5,
    // borderRadius: 5,
    // width: 220,
    display:'none',
  },
  text: {
    // fontSize: 30,
    // color: 'orange',
    // marginLeft: 7,
    display:'none',
  },
  display: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  hours: {
    color:'#8BC34A',
    fontSize: 60,
  },
  minutes: {
    color:'#8BC34A',
    fontSize: 60,
  },
  seconds: {
    position: 'absolute',
    color:'#8BC34A',
    fontWeight: 'bold',
    fontSize: 80,
    // marginBottom: 90,
    bottom:"35%",
  },
  ms: {
    color:'#8BC34A',
    position: 'absolute',
    top:"55%",
    fontSize: 30,
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor:'transparent',
    borderWidth: 4,
    borderColor: "#8BC34A",
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default styles;
