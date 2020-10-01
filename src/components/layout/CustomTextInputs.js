import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: "10px"
    }
}));


function CustomTextInputs(props) {
    const classes = useStyles();

    const appendBoxText = () => {
        for (let i = 0; i < props.boxCount; i++) {
            let value = (document.getElementById(`text-input-${i+1}`) !== null ? document.getElementById(`text-input-${i+1}`).value : " ");
            props.myFormData.set(`boxes[${i}][text]`, value);
        }
    }

    const TextInputs = () => {
        let comp = [];
        for (let i = 1; i <= props.boxCount; i++) {
            comp.push(<TextField key={i} id={"text-input-" + i} label={"Enter text #" + i} variant="outlined" fullWidth onInput={appendBoxText} className={classes.formControl} />);
        }
        return comp;
    }

    return (
        <TextInputs />
    )
}

export default CustomTextInputs;
