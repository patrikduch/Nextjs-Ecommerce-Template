import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
}));

/**
 * @function AdminHeaderContainer Encapsulation component for all admin header components.
 * @param children Nested content (components) that will be encapsulated inside this wrapper component. 
 * @returns Custom MaterialUI Box component.
 */
const AdminHeaderContainer: React.FC = ({ children }) => {

    const classes = useStyles();

    return (
        <Box>
            <div className={classes.root}>
                {children}
            </div>
        </Box>
    );
}

export default AdminHeaderContainer;