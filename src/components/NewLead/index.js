import { MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';

class NewLead extends React.Component {
  state = { type: '', firstName: '' };

  handleTypeChange = event => {
    this.setState({ type: event.target.value });
  };

  handleInputChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  render() {
    console.log(this.state.firstName);
    return (
      <React.Fragment>
        <TextField
          required
          id="standard-required"
          label="First Name"
          placeholder="Hello World"
          margin="normal"
          variant="outlined"
          onChange={this.handleInputChange('firstName')}
          value={this.state.firstName}
        />
        <TextField
          required
          id="standard-required"
          label="Last Name"
          placeholder="Hello World"
          margin="normal"
          variant="outlined"
          onChange={this.handleInputChange('lastName')}
          value={this.state.lastName}
        />
        <TextField
          required
          id="standard-required"
          label="Phone"
          placeholder="Hello World"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          placeholder="Hello World"
          margin="normal"
          variant="outlined"
        />
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
          <MenuItem value={'Verizon'}> Verizon </MenuItem>
          <MenuItem value={'AT&T'}> AT&T </MenuItem>
          <MenuItem value={'Sprint'}> Sprint </MenuItem>
        </TextField>

        <TextField
          rows={8}
          multiline
          id="standard-required"
          label="Notes"
          placeholder="Hello World"
          margin="normal"
          variant="outlined"
        />
      </React.Fragment>
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

export default NewLead;
