import React from 'react';
import { Card, CardActionArea, CardHeader, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%",
        display: 'flex'
    },
    cardActionArea: {
        flexGrow: 1,
        flexDirection: 'column'
    }
}))

function Memes(props) {
    const classes = useStyles();
    return (
        <div style={{padding: "24px"}}>
            <Grid container spacing={3} alignContent="flex-start" justify="center">
                {props.memes !== undefined ? 
                    props.memes.map(meme => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={meme.id}>
                            <Card variant="outlined" className={classes.card}>
                                <CardActionArea className={classes.cardActionArea}>
                                    <CardHeader title={meme.name} />
                                    <CardMedia component="img" src={meme.url} alt={meme.name} title={meme.name} />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )) : (<div></div>)}
            </Grid>
        </div>
    )
}

export default Memes;
