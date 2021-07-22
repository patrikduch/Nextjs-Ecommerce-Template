import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    headerTitle: {
        marginBottom: '1.5vh'
    }
});

/**
 * @function DashboardGraphTitle Displays subtitle (label) for each graph displayed on the admin dashboard page.
 * @param children React node element that represents label for particular graph item. 
 * @returns Typography JSX.
 */
const DashboardGraphTitle: React.FC = ({ children }) => {

    const classes = useStyles();

    return (
        <Typography className={classes.headerTitle} variant='h3'>{children}</Typography>
    );
}

export default DashboardGraphTitle;