import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }
   render() {
   var i = 1;
      return (
         <div>
            {/*
            <p>Welcome to my react program demo !</p>
            <p>{i == 1 ? 'HAHA' : 'HEiHEI'}</p>
            */}
            <Header/>
            <Content/>
         </div>
      )
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}


export default App;
