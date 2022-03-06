import { createGlobalStyle } from 'styled-components';
import { PAGE_SETTINGS } from '../constants';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${PAGE_SETTINGS.page_background_url});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
	align-items: center;
  }
`;
