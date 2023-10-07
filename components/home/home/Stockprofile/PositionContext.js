// // PositionProvider.js
// import React, { createContext, useContext, useReducer } from 'react';

// const PositionContext = createContext();

// export const usePosition = () => {
//   const context = useContext(PositionContext);
//   if (!context) {
//     throw new Error('usePosition must be used within a PositionProvider');
//   }
//   return context;
// };

// const initialState = {
//   positions: [], // Initialize with an empty array or your default positions
// };

// const positionReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_POSITION':
//       return {
//         ...state,
//         positions: [...state.positions, action.payload],
//       };
//     // Add more cases for other actions if needed
//     default:
//       return state;
//   }
// };

// const PositionProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(positionReducer, initialState);

//   return (
//     <PositionContext.Provider value={{ state, dispatch }}>
//       {children}
//     </PositionContext.Provider>
//   );
// };

// export default PositionProvider;
