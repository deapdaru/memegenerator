import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    formControl: {
        marginTop: "10px"
    }
}));

function CustomTextInputs(props) {
    const classes = useStyles();

    const TextInputs = () => {
        let comp = [];
        for (let i = 1; i <= props.boxCount; i++) {
            comp.push(
                <TextField 
                    key={i} 
                    id={"text-input-" + i} 
                    label={"Enter text #" + i} 
                    variant="outlined" 
                    fullWidth 
                    onInput={props.appendFormInput(`boxes[${i}][text]`)} 
                    className={classes.formControl} 
                />
            );
        }
        return comp;
    }

    return (
        <TextInputs />
    )
}

export default CustomTextInputs;
