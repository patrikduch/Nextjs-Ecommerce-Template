import { SwipeableDrawer, IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderDrawerList from './Header-Drawer-List';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    langcode: string;
    handleChangeLangcode: () => void;
}

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
    },
}));

/**
 * @function HeaderDrawerContainer Encapsulation component for rendering miniatured navigation for small devices.
 * @returns Static JSX with interactive Drawer functionality.
 */
const HeaderDrawerContainer: React.FC<IProps> = ({ langcode, handleChangeLangcode }) => {

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    return (
        <>
            <SwipeableDrawer
                classes={{ paper: classes.drawer }}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)} >
                <HeaderDrawerList langcode={langcode} closeDrawer={() => setOpenDrawer(false)} handleChangeLangcode={handleChangeLangcode} />
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    );
}

export default HeaderDrawerContainer;