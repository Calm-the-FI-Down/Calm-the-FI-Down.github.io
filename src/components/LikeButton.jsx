// import React, { Component } from 'react';

// class ButtonIncrementer extends Component {
//   state = {
//     age: 42,
//   };

//   handleAmountChange = () => {
//     this.setState({
//       age: this.state.age + 1 
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleAmountChange}>
//           Increment amount.
//         </button>
//         <p>You have ${this.state.age}.</p>
//       </>
//     );
//   }
// }

// export default ButtonIncrementer;

import React, { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(prev => prev + 1)}>
      Likes: {likes}
    </button>
  );
}

// import React, { useState } from 'react';

// function LikeButton() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default LikeButton;

