import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import DonutGraph from '../../../../common/graphs/Donut-Graph';
import dynamic from 'next/dynamic'
import DashboardGraphTitle from '../Header-Graph-Title';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const DynamicComponentWithNoSSR = dynamic(
    () => import('../../../../common/graphs/Line-Graph'),
    { ssr: false }
)

const DashboardUpperSection: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Grid item md={6}>
                <DashboardGraphTitle>Donut graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DonutGraph /></Paper>
            </Grid>

            <Grid item md={6}>
                <DashboardGraphTitle>Line graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DynamicComponentWithNoSSR /></Paper>
            </Grid>
        </>
    );
}

export default DashboardUpperSection;