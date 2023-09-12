import { StyleSheet, Dimensions, Animated } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  buttonContainer: { 
    position: "absolute",
    padding: 15, 
    alignItems: "center", 
    borderRadius: 20,
    height: '100%',
    width: '100%', 
    opacity: 1.0,
    zIndex: 100,
  },
  loginView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    objectFit: 'contain',
    height: '61.6%',
    borderRadius: 15,
    bottom: '-70%',
  },
  image: {
    // Add styles for the ImageBackground here
    flex: 1, // You may need to adjust this depending on your layout
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  signinbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginTop: '10%',
    paddingVertical: 21,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
  },
  signupbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    // marginTop: '0%',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 0,
    // backgroundColor: 'invisible',
    color: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  buttonsViewcontainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: -10,
    marginTop: '-3%',
    justifyContent: 'space-evenly',
    // backgroundColor: 'green',
    width: '100%',
    height: '80%',
    zIndex: 1000,
  },
  signintext: {
    fontSize: 23,
    lineHeight: 26,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  signuptext: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textor: {
    // backgroundColor: 'black',
    // padding: '5%',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
  },
  Viewtextor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '10%',
    height: '10%',
    color: 'black',
    zIndex: 1000,
  }
});

export default styles;
