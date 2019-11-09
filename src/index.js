import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Lead from './components/Lead';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme({})}>
    <CssBaseline />
    {/* <App foo={1} /> */}
    <div style={{ padding: 24 }}>
      <Paper style={{ padding: 24 }}>
        <Lead />
      </Paper>
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
