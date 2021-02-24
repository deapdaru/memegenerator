import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardHeader, CardMedia, CircularProgress, Grid, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: "#ddd",
        height: "100%",
        display: "flex"
    },
    cardActionArea: {
        flexGrow: 1,
        flexDirection: "column"
    },
    media: {
        maxHeight: "300px",
        maxWidth: "90%",
        margin: "0 auto",
        padding: "20px 0"
    },
    link: {
        textDecoration: "none"
    }
}))

const Loading = () => (
    <div style={{height:"350px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <CircularProgress/>
    </div>
)

function Memes(props) {
    const classes = useStyles();
    return (
        <div style={{padding: "24px"}}>
            <Grid container spacing={3} alignContent="flex-start" justify="center">
                {props.memes !== undefined ?
                    props.memes
                    .slice(props.page*10,props.page*10 + 10)
                    .map((meme, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={meme.id}>
                            <Link className={classes.link} to={{
                                pathname: "/" + meme.id + "/" + meme.box_count,
                                state: {
                                    meme: meme
                                }
                            }}>
                                <Fade in timeout={props.fade === 'top' ? (index+1)*500 : (10 - index)*500}>
                                    <Card variant="outlined" className={classes.card}>
                                        <CardActionArea className={classes.cardActionArea}>
                                            <LazyLoad placeholder={<Loading/>}>
                                                <CardHeader title={meme.name} />
                                                <CardMedia 
                                                    className={classes.media} 
                                                    component="img" 
                                                    src={meme.url} 
                                                    alt={meme.name} 
                                                    title={meme.name} 
                                                />
                                            </LazyLoad>
                                        </CardActionArea>
                                    </Card>
                                </Fade>
                            </Link>
                        </Grid>
                    )) : (<div></div>)}
            </Grid>
        </div>
    )
}

export default Memes;
