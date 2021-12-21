import React from 'react'
import Button from '@mui/material/Button';
import { FormControl, TextField } from "@mui/material";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
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