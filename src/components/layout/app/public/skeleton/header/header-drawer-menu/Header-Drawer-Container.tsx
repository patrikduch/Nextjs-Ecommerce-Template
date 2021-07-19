import { SwipeableDrawer, IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderDrawerList from './Header-Drawer-List';

const useStyles = makeStyles((theme) => ({

    drawerIcon: {
        width: '50px',
        height: '50px'
    },

    drawer: {
        backgroundColor: `${theme.palette.common.black}`,
        color: `${theme.palette.common.white}`
    },

    drawerIconContainer: {
        marginLeft: 'auto',

        '&:hover': {
            backgroundColor: 'transparent'
        },

        color: '#fdfbfb'
    }
}));

/**
 * @function HeaderDrawerContainer Encapsulation component for rendering miniatured navigation for small devices.
 * @returns Static JSX with interactive Drawer functionality.
 */
const HeaderDrawerContainer: React.FC = () => {

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    return (
        <>
            <SwipeableDrawer classes={{ paper: classes.drawer }} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} disableBackdropTransition={!iOS} disableDiscovery={iOS}>
                <HeaderDrawerList />
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    );
}

export default HeaderDrawerContainer;