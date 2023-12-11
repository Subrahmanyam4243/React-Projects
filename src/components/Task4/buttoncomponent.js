



// let Button=({buttonprops})=>{
//     // console.log(props)
//     function getRandomColor() {
//         // Generate a random hexadecimal color code
//         return '#' + Math.floor(Math.random()*16777215).toString(16);
//     }
//     console.log(getRandomColor)
//     return <button className="btn btn-info"style={{
//         color:buttonprops.color,
//         width:buttonprops.width,
//         backgroundColor:getRandomColor()
//     }}>{buttonprops.text}</button>
// }
// export default Button
import React, { useState } from 'react';

const Button = ({ buttonprops }) => {
  const [buttonState, setButtonState] = useState({
    color: buttonprops.color,
    width: buttonprops.width,
    backgroundColor: getRandomColor(),
  });

  function getRandomColor() {
    // Generate a random hexadecimal color code
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const handleClick = () => {
    setButtonState({
      ...buttonState,
      backgroundColor: getRandomColor(),
      width: Math.floor(Math.random() * 200) + 50, // Change the width randomly
    });
  };

  return (
    <button
      className="btn btn-info"
      style={{
        color: buttonState.color,
        width: buttonState.width,
        backgroundColor: buttonState.backgroundColor,
      }}
      onClick={handleClick}
    >
      {buttonprops.text}
    </button>
  );
};

export default Button;
