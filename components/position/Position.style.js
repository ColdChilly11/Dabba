import { StyleSheet, Dimensions, Animated } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    // Add styles for the ImageBackground here // You may need to adjust this depending on your layout
    position: 'absolute',
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center', 
    zIndex: -1,
  },
  baseimage: {
    position: 'sticky',
    width: 'auto',
    height: 100,
    marginBottom: '0%',
    // backgroundColor: 'green',

  },
  positionpageview: {
    // backgroundColor: 'red',
    height: screenHeight-140,
    width: screenWidth,
  }
});

export default styles;
