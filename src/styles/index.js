import styled, { createGlobalStyle } from 'styled-components';
import FreedokaOne from '../fonts/FredokaOne.ttf'
import BebasNeue from '../fonts/BebasNeue.ttf'
import Urbanist from '../fonts/Urbanist.ttf'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    html,
    body,
    #root {
      height: 100%;
    }
    body {
      text-rendering: optimizeLegibility !important;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    @font-face {
      font-family: 'Freedoka One';
      src: url(${FreedokaOne});
    }

    @font-face {
      font-family: 'BebasNeue';
      src: url(${BebasNeue});
    }

    @font-face {
      font-family: 'Urbanist';
      src: url(${Urbanist});
    }

    @font-face {
      font-family: 'UrbanistTeste';
      src: url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap');
    }
`;