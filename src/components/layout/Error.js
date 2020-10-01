import React from 'react'
import { Grid, Card, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div style={{paddingTop: "15px"}}>
            <Grid container justify="space-around">
                <Link to="/">
                    <Card style={{backgroundColor: "#ddd"}}>
                        <CardHeader title="Woah there whatchu tryin buckeroo! Click here to go to the main page you absolute goofball."></CardHeader>
                    </Card>
                </Link>
            </Grid>
        </div>
    )
}

export default Error;
