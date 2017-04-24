import React, { Component } from 'react';

import TodoComponent from './Todo/TodoComponent';

class App extends Component {

  constructor(props) {
    super();
  }
 
  render() {  
    return (
      <div>
        <TodoComponent />
      </div>
    );
  }

};

export default App;