import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import { mdiCheckBold } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import serviceProviders from '../../assets/serviceProviders';

const textFields = [
  {
    id: 'firstName',
    label: 'First Name',
    props: {
      autoFocus: true,
    },
  },
  {
    id: 'lastName',
    label: 'Last Name',
  },
  {
    id: 'phone',
    label: 'Phone',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'generalNotes',
    label: 'General Notes',
    props: {
      rows: 8,
      multiline: true,
    },
  },
];

const styles = theme => ({
  container: {
    fontStyle: 'other',
    padding: 20,
  },
  buttonPadding: {
    marginRight: theme.spacing(2),
  },
});

class NewLead extends React.Component {
  state = {
    type: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    generalNotes: '',
  };

  handleTypeChange = event => {
    this.setState({ type: event.target.value });
  };

  handleInputChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={1}>
        {textFields.map(textField => (
          <Grid item xs={12} md={6}>
            <TextField
              key={textField.id}
              required
              fullWidth
              id={`addLeadField-${textField.id}`}
              label={textField.label}
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange(textField.id)}
              value={this.state[textField.id]}
              {...textField.props}
            />{' '}
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <TextField
            required
            select
            id="standard-required"
            label="Type"
            placeholder="Hello World"
            margin="normal"
            variant="outlined"
            value={this.state.type}
            onChange={this.handleTypeChange}
            fullWidth
          >
            {serviceProviders.map(provider => (
              <MenuItem key={provider.value} value={provider.value}>
                {provider.label}
              </MenuItem>
            ))}
          </TextField>{' '}
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonPadding}
            startIcon={
              <Icon
                path={mdiCheckBold}
                title="User Profile"
                size={1}
                color="white"
              />
            }
          >
            Submit
          </Button>
          <Button size="large" className={classes.margin}>
            Clear
          </Button>
        </Grid>
      </Grid>
    );
  }
}

/*
  fname (textFields)
  lname (textFields)
  phone (textFields)
  email (textFields)
  type (select)
  notes (textArea)
  typeOfLead (organic|referral)
  
  login


*/

export default withStyles(styles)(NewLead);
