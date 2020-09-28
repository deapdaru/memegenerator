import React from 'react';
import { Card, CardActionArea, CardHeader, CardMedia, Grid } from '@material-ui/core';

function Memes(props) {  
    return (
        <Grid container spacing={3} alignItems="center" justify="center">
            {props.memes !== undefined ? 
                props.memes.map(meme => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={meme.id}>
                        <Card variant="outlined">
                            <CardActionArea>
                                <CardHeader title={meme.name} />
                                <CardMedia component="img" src={meme.url} alt={meme.name} title={meme.name} />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )) : (<div></div>)}
        </Grid>
    )
}

export default Memes;
