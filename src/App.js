import React from 'react';
import GlobalStyle, { Container } from './styles';
import Game from './components/Game';

function App() {
  return (
      <React.Fragment>
      <GlobalStyle/>
        <Container>
          <Game/>
        </Container>
      </React.Fragment>
  );
}

export default App;
