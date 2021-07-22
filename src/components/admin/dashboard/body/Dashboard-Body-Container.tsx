import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DashboardUpperSection from './sections/Dashboard-Upper-Section';
import DashboardMiddleSection from './sections/Dashboard-Middle-Section';
import DashboardBottomSection from './sections/Dashboard-Bottom-Section';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

/**
 * @function DashboardBodyContainer Encapsulation component for grouping  all dashboard sections.
 * @returns Set of dashboard sections.
 */
const DashboardBodyContainer: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <DashboardUpperSection />
                <DashboardMiddleSection />
                <DashboardBottomSection />
            </Grid>
        </div>
    );
}

export default DashboardBodyContainer;