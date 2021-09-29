import React from 'react'

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}













// import React, { Component } from 'react'

// class Square extends Component{
//   render(){
//     return(
//       <>
//         <div>
//           <button className="square"></button>
//           {this.props.value}
//         </div>
//       </>
//     )
//   }
// }
// class Board extends Component {
//   renderSquare(i) {
//     return <Square value={i} />
//   }
// }
// export default Square
