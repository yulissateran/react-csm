import '@csstools/normalize.css';
import { createGlobalStyle } from 'styled-components';

export const AppGlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family:   'Nunito' , -apple-system, BlinkMacSystemFont,  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  font-family:   'Nunito' , -apple-system, BlinkMacSystemFont,  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  box-sizing: border-box;
}

h2,
h3,
h4,
h5,
h6,
p {
  border: 0;
  vertical-align: baseline;
}
`;
