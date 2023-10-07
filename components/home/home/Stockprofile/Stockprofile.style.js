import { StyleSheet, Dimensions, Animated } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

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
  goback: {
    // backgroundColor: 'red',
    height: '15%',
    width: '7.5%',
    marginLeft: 10,
    marginTop: 10,
  },
  gobackimage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  stockchart: {
    // backgroundColor: 'red',
    marginTop: -40,
    width: '100%',
    height: '30%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  stockchartimage: {
    backgroundColor: 'red',
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  stockview: {
    width: '95%',
    height: '100%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 0,
    // backgroundColor: 'red',
    borderRadius: 10,
    borderColor: 'white',
    opacity: 1,
    borderWidth: 1,
    backgroundColor: "rgba(238, 238, 238, 0.1)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  majorview: {
    width: '95%',
    height: '90%',
    display: 'flex',
    alignSelf: 'center',
    marginTop: -35,
  },
  marketoption2: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 0,
    // backgroundColor: 'red',
    borderTopRadius: 8,
    borderColor: '#626363',
    opacity: 1,
    backgroundColor: "rgba(18, 129, 209, 0.2)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  marketstockleft: {
    height: '100%',
    width: '50%',
    // backgroundColor: 'yellow',
  },
  marketstockright: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '50%',
    // backgroundColor: 'yellow',
  },
  marketstocktext: {
    color: 'white',
    // backgroundColor: 'red',
    fontWeight: '300',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 10,
    textAlign: 'left',
    textAlignVertical: 'middle',
  },
  marketstockpercent: {
    color: '#007000',
    // backgroundColor: 'red',
    fontWeight: '300',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
    textAlign: 'left',
    textAlignVertical: 'middle',
  },
  marketstocklowhigh: {
    height: '70%',
    width: '50%',
    marginHorizontal: 10,
    marginRight: 30,
    // backgroundColor: 'red',
    marginHorizontal: 0,
    borderRadius: 10,
    borderColor: '#626363',
    opacity: 1,
    borderWidth: 2,
    backgroundColor: "rgba(238, 238, 238, 0.1)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  marketstocklowhightext: {
    color: 'white',
    // backgroundColor: 'red',
    padding: 4,
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center',
  },
  marketstocklowhightext2: {
    color: '#1281D1',
    // backgroundColor: 'red',
    padding: 0,
    fontWeight: '500',
    fontSize: 7.5,
    textAlign: 'center',
  },
  fundstextview: {
    display: 'flex',
    height: '30%',
    // backgroundColor: 'green',
  },
  fundstext: {
  color: 'white',
  fontWeight: "bold",
  fontSize: 18,
  textAlignVertical: 'center',
  textAlign: "left",
  verticalAlign: "middle",
  // backgroundColor: 'red',
  },
  marketlimit: {
    // backgroundColor: 'red',
    width: '100%',
    height: '10%',
    padding: 3,
    margin: -5,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  fundsboxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'green',
    alignSelf: 'center',
    height: '70%',
    width: '100%',
  },
  fundsboxes2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'green',
    alignSelf: 'center',
    height: '70%',
    width: '100%',
  },
  boxes: {
    height: '100%',
    width: '45%',
    marginHorizontal: 10,
    height: '100%',
    width: '45%',
    // backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 8,
    borderColor: '#626363',
    opacity: 1,
    borderWidth: 2,
    backgroundColor: "rgba(238, 238, 238, 0.1)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  chartboxes: {
    height: '100%',
    width: '25%',
    // backgroundColor: 'red',
    marginHorizontal: 130,
    borderRadius: 8,
    opacity: 1,
    backgroundColor: "rgba(238, 238, 238, 0.1)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  buysellboxe1: {
    height: '100%',
    width: '45%',
    marginHorizontal: 10,
    height: '100%',
    width: '45%',
    // backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 8,
    opacity: 1,
    backgroundColor: "#D2222D",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  buysellboxe2: {
    height: '100%',
    width: '45%',
    marginHorizontal: 10,
    height: '100%',
    width: '45%',
    // backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 8,
    opacity: 1,
    backgroundColor: "#007000",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  boxes2: {
    marginHorizontal: 10,
    height: '100%',
    width: '45%',
    // backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 0,
    borderColor: '#626363',
    opacity: 1,
    backgroundColor: "rgba(238, 238, 238, 0.1)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
    width: 0,
    height: 0,
    shadowOpacity: 1,}
  },
  boxestext: {
    color: 'white',
    // backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  boxesbuytext: {
    color: 'white',
    // backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  boxestext2: {
    color: 'white',
    width: '50%',
    // backgroundColor: 'red',
    padding: 3,
    fontSize: 15,
    textAlign: 'center',
  },
  username: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 65,
    // marginTop: '0%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    elevation: 0,
    // backgroundColor: 'invisible',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  

});

export default styles;