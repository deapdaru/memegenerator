import React from 'react';
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

function CustomBreadcrumb(props) {
    return (
        <div>
            <Breadcrumbs style={{paddingLeft: "24px"}} aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    <HomeIcon style={{marginTop:"5px"}} />
                </Link>
                <Typography color="textPrimary">{props.memeName}</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default CustomBreadcrumb;
