import { Drawer, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const drawerWidth = 240;

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    open: boolean;
}


const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1
        }
    },
}));

/**
 * @function AdminHeaderDrawer Drawer component for displaying menu navigation on mobile devices.
 * @param children
 * @param open 
 * @returns 
 */
const AdminHeaderDrawer: React.FC<IProps> = ({ children, open }) => {

    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}
        >
            {children}
        </Drawer>
    );
}

export default AdminHeaderDrawer;