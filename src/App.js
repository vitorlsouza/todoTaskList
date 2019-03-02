import React, { Component } from 'react';

import GlobalStyle from './styles/global';

import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Main />
      </>
    );
  }
}

export default App;
