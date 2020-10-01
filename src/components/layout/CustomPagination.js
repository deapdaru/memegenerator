import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Grid, Hidden } from '@material-ui/core';

function CustomPagination(props) {
    const handleEvent = (event, value) => {
        props.setPage(value - 1);
    }

    return (
        <Grid container justify="space-around">
            <Hidden xsDown>
                <Pagination 
                    count={10} 
                    page={props.page + 1} 
                    onChange={handleEvent} 
                    variant="outlined" 
                    color="secondary" 
                    showFirstButton 
                    showLastButton 
                    boundaryCount={3} 
                />
            </Hidden>
            <Hidden smUp>
                <Pagination 
                    size="small" 
                    count={10} 
                    page={props.page + 1} 
                    onChange={handleEvent} 
                    variant="outlined" 
                    color="secondary" 
                    boundaryCount={2} 
                />
            </Hidden>
        </Grid>
    )
}

export default CustomPagination;
