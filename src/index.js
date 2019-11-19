import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EnhancedTable from './components/EnhancedTable';
import Lead from './components/Lead';
import NewLead from './components/NewLead';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme({})}>
    <Router>
      <CssBaseline />
      <div style={{ padding: 24 }}>
        <Paper style={{ padding: 24 }}>
          <Switch>
            <Route component={EnhancedTable} path="/" />
            <Route component={NewLead} path="/leads/new" />
            <Route component={Lead} path="/leads/:id" />
          </Switch>
          {/* <App foo={1} /> */}
        </Paper>
      </div>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
