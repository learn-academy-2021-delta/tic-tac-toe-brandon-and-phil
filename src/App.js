

import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
   <Game />
  );
}

export default App;













// import React, { Component } from 'react'
// import Square from './components/Square'
// import './App.css'

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       xLocation: null,
//       oLocation: null
//     }
//   }

// handleGamePlay = (index) => {
//   const {board, xLocation, oLocation} = this.state
// }
//   render(){
//     return(
//       <>
//         <h1>Tic Tac Toe</h1>
//         <div className='gameboard'>
//         {this.state.board.map((value, index) => {
//           return(
//             <Square
//             value={value}
//             index={index}
//             key={index}
//             />
//           )
//         })}
//            </div>
//       </>
//     )
//   }
// }
// export default App
