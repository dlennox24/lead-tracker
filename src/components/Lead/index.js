import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { useParams } from 'react-router-dom';

function Lead() {
  const { id } = useParams();
  const listItemText = [
    {
      label: 'ID',
      value: id,
    },
    {
      label: 'First Name',
      value: 'Value1',
    },
    {
      label: 'Last Name',
      value: 'Value2',
    },
    {
      label: 'Phone',
      value: 'Value3',
    },
    {
      label: 'Email',
      value: 'Value4',
    },
    {
      label: 'Type',
      value: 'Value5',
    },
    {
      label: 'General Notes',
      value: 'Value6',
    },
  ];
  return (
    <Grid container spacing={1}>
      {listItemText.map(listText => (
        <Grid item xs={12} md={3} key={listText.label}>
          <ListItemText
            primary={listText.value}
            secondary={listText.label}
            component="div"
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Lead;
