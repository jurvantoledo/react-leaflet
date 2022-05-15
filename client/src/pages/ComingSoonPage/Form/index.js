import React from 'react'
import { makeStyles, FormControl, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      padding: theme.spacing(2, 0),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1, 0),
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function Form(props) {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <FormControl fullWidth>
                <TextField
                    variant={props.variant}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    variant={props.variant}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField 
                    variant={props.variant}
                    multiline
                    rows={3} 
                />
            </FormControl>
            <FormControl>
                <Button variant="contained">
                    Verzenden
                </Button>
            </FormControl>
        </form>
    )
}