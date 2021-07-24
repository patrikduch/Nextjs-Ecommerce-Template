import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';
import clsx from 'clsx';

/**
 * @interface IProps Componnet's props interface.
 */
interface IProps {
    open: boolean;
    openAppBar: () => void;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: 'none'
    },
}));

/**
 * @function AdminHeaderAppbar Header app for administration.
 * @param openAppBar Method to open the header appbar.
 * @param open Signalization opened state of the header appbar.
 * @returns Custom Appbar component.
 */
const AdminHeaderAppbar: React.FC<IProps> = ({ open, openAppBar }) => {

    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={openAppBar}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    <ProjectNameContainer />
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeaderAppbar;