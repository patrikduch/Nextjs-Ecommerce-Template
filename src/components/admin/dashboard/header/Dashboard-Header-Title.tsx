import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    dashboardTitle: {
        marginBottom: '2.5vh',
    }
});

const DashboardHeaderTitle: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Typography className={classes.dashboardTitle} variant='h2'>Dashboard</Typography>
        </>
    );
}

export default DashboardHeaderTitle;