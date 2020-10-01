import React, { useState } from 'react'
import { 
    Card, CardContent, CardHeader, CardMedia, Grid, InputLabel, TextField, FormControl, 
    Select, MenuItem, Typography, Button, Dialog, DialogTitle, IconButton, DialogContent, Divider 
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles';
import CustomTextInputs from './layout/CustomTextInputs';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    formControl: {
        marginTop: "10px"
    },
    button: {
        marginTop: "10px",
        width: "100%"
    },
    dialog: {
        width: "80%"
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between"
    },
    dialogContent: {
        width: "70%",
        margin: "0 auto",
        paddingTop: "50px"
    }
}));

function EditMeme(props) {
    const classes = useStyles();
    const meme = props.meme;
    const [generatedMeme, setGeneratedMeme] = useState("");
    const [open, setOpen] = useState(false);
    const params = useParams();

    var myFormData = new FormData();
    myFormData.append("template_id", params.id);
    myFormData.append("username", "DeapDaru");
    myFormData.append("password", "deapdaru");
    myFormData.append("font", "impact");

    const appendUsername = (event) => {
        myFormData.set("username", event.target.value);
    }

    const appendPassword = (event) => {
        myFormData.set("password", event.target.value);
    }

    const appendFont = (event) => {
        myFormData.set("font", event.target.value);
    }

    const modalClose = () => {
        setOpen(false);
    }

    async function generateMeme() {
        try {
            const response = await axios.post("https://api.imgflip.com/caption_image", myFormData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            });
            setGeneratedMeme(response.data.data.url);
            setOpen(true);
        }
        catch (err) {
            console.log(err)
        }
        
    }

    return (
        <Grid container style={{paddingTop: "24px"}}>
            <Grid item sm={1}></Grid>
            <Grid item xs={12} sm={10}>
                <Card variant="outlined">
                    <CardHeader style={{textAlign: "center"}} title={meme.name}/>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <CardMedia component="img" src={meme.url}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1">Enter details to make the meme:</Typography>
                                <Typography variant="caption" gutterBottom>(Enter your own imgflip account's username and password or leave blank to make memes through default profile linked to my account!)</Typography>
                                <form noValidate id="myForm" name="myForm">
                                    <TextField
                                        id="username" 
                                        label="Enter your imgflip username" 
                                        variant="outlined" 
                                        fullWidth 
                                        className={classes.formControl}
                                        onInput={appendUsername}
                                    />
                                    <TextField 
                                        id="password" 
                                        type="password" 
                                        label="Enter your imgflip password" 
                                        variant="outlined" 
                                        fullWidth 
                                        className={classes.formControl}
                                        onInput={appendPassword}
                                    />
                                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                        <InputLabel id="font-label">Font</InputLabel>
                                        <Select
                                            labelId="font-label"
                                            id="font"
                                            defaultValue="impact"
                                            label="Font"
                                            onChange={appendFont}
                                        >
                                            <MenuItem value="impact">Impact</MenuItem>
                                            <MenuItem value="arial">Arial</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <CustomTextInputs myFormData={myFormData} boxCount={params.text_boxes} />
                                    <Button
                                        className={classes.button}
                                        variant="outlined" 
                                        color="secondary" 
                                        onClick={generateMeme}
                                    >
                                        Generate Meme
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={1}></Grid>
            <Dialog scroll="body" fullScreen open={open} onClose={modalClose}>
                <DialogTitle>
                    Meme Generated!
                    <IconButton style={{position: "absolute", top: "10px", right: "10px"}} onClick={modalClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Divider />
                <DialogContent className={classes.dialogContent}>
                    <CardMedia component="img" src={generatedMeme} alt={meme.name} title={meme.name} />
                    <a style={{textDecoration: "none"}} href={generatedMeme} download>
                        <Button style={{width: "100%", margin: "10px 0"}} variant="outlined" color="secondary">Download Meme</Button>
                    </a>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export default EditMeme
