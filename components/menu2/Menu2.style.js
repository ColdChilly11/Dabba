import { StyleSheet, Dimensions, Animated } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
    alignSelf: 'center', 
    zIndex: 10,
    // backgroundColor: 'red',
  },
  baseimage: {
    position: 'sticky',
    width: 'auto',
    height: 100,
    marginBottom: '0%',
    // backgroundColor: 'green',

  },
  menuview: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 0,
    top: 0,
    width: screenWidth,
    height: screenHeight,
    borderRadius: 15,
    zIndex: 1000,
  },
  tabview: {
    backgroundColor: '#191818',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 1000,
  },
  tabbview: {
    backgroundColor: '#191818',
    height: 90,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabbbview: {
    backgroundColor: '#191818',
  },
  buttonstyle1: {
    width: 50,
    height: 50,
    top: 20,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle2: {
    width: 50,
    height: 50,
    top: 20,
    // backgroundColor: 'white',
  }
});

export default styles;
