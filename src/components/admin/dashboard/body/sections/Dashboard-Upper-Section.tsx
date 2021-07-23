import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import dynamic from 'next/dynamic'
import DashboardGraphTitle from '../Header-Graph-Title';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const DynamicDonutGraphWithNoSSR = dynamic(
    () => import('@components/common/graphs/Donut-Graph'),
    { ssr: false }
);

const DynamicBarGraphWithNoSSR = dynamic(
    () => import('@components/common/graphs/Bar-Graph'),
    { ssr: false }
);

const DynamicAreaGraphWithNoSSR = dynamic(
    () => import('@components/common/graphs/Area-Graph'),
    { ssr: false }
);

const DynamicColumnGraphWithNoSSR = dynamic(
    () => import('@components/common/graphs/Column-Graph'),
    { ssr: false }
);

const DynamicLineRadialBarWithNoSSR = dynamic(
    () => import('@components/common/graphs/Radial-Bar-Graph'),
    { ssr: false }
);

const DashboardUpperSection: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Grid item md={6}>
                <DashboardGraphTitle>Bar graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DynamicBarGraphWithNoSSR /></Paper>
            </Grid>

            <Grid item md={6}>
                <DashboardGraphTitle>Donut graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DynamicDonutGraphWithNoSSR /></Paper>
            </Grid>

            <Grid item md={6}>
                <DashboardGraphTitle>Area graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DynamicAreaGraphWithNoSSR /></Paper>
            </Grid>

            <Grid item md={6}>
                <DashboardGraphTitle>Column graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DynamicColumnGraphWithNoSSR /></Paper>
            </Grid>

            <Grid item md={6}>
                <DashboardGraphTitle>RadialBar graph example</DashboardGraphTitle>
                <Paper className={classes.paper}><DynamicLineRadialBarWithNoSSR /></Paper>
            </Grid>
        </>
    );
}

export default DashboardUpperSection;