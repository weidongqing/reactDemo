import React from 'react';

class App extends React.Component {
   render() {
   var i = 1;
      return (
         <div>
            <p>Welcome to my react program demo !</p>
            <p>{i == 1 ? 'HAHA' : 'HEiHEI'}</p>
            {/*Multi line comment...*/}
         </div>
      )
   }
}

export default App;
