// import React, { useState } from 'react';
// import { View, TextInput, Animated, TouchableOpacity } from 'react-native';

// const AnimatedUsernameInput = () => {
//     const [isFocused, setIsFocused] = useState(false);
//     const [username, setUsername] = useState('');
//     const animatedValue = new Animated.Value(0);
  
//     // Define animation configurations
//     const onFocus = () => {
//       setIsFocused(true);
//       Animated.timing(animatedValue, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: false, // Use this if your animation requires layout changes
//       }).start();
//     };
  
//     const onBlur = () => {
//       setIsFocused(false);
//       Animated.timing(animatedValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     };
  
//     const labelStyle = {
//       transform: [
//         {
//           translateY: animatedValue.interpolate({
//             inputRange: [0, 1],
//             outputRange: [0, 40], // Adjust the value to control the animation
//           }),
//         },
//       ],
//     };
    
//     return (
//       <View style={{width: '100%'}}>
//         <TouchableOpacity activeOpacity={1} onPress={() => ref.focus()}>
//           <Animated.Text style={[labelStyle, { color: isFocused ? 'white' : 'white' }]}>
//             Username
//           </Animated.Text>
//         </TouchableOpacity>
//         <TextInput
//           ref={(inputRef) => (ref = inputRef)}
//           style={{  borderBottomWidth: 1, 
//                     borderColor: 'white',
//                     width: '100%',
//                     backgroundColor: 'white',
//                 }}
//           onFocus={onFocus}
//           onBlur={onBlur}
//           value={username}
//           onChangeText={(text) => setUsername(text)}
//         />
//       </View>
//     );
//   };
  
//   export default AnimatedUsernameInput;
  