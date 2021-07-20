import { AppBar, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import HeaderProjectLogo from './Header-Project-Logo';
import HeaderDesktopAppbar from './header-desktop-menu/Header-Desktop-Appbar';
import HeaderDrawerContainer from './header-drawer-menu/Header-Drawer-Container';

/**
 * @interface IProps Component's props interface.
 */
interface IProps { }

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1.5em',

        [theme.breakpoints.down('md')]: {
            marginBottom: '0.5em',
        }
    },
    root: {
        backgroundColor: '#000000',
    },
    freeEstimateBtn: {
        borderRadius: '50px',
        marginLeft: '25px',
        marginRight: '25px'
    },
}));

/**
 * @function HeaderAppbar Header custom appbar.
 * @returns JSX that renders header navigation bar.
 */
const HeaderAppbar: React.FC<IProps> = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const [langcode, setLangcode] = useState('cs');

    // Responsivity
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    /**
     * @function handleActiveTabChange Change active indicator for appbar navigation.
     * @param value Value of newly selected page.
     */
    const handleActiveTabChange = (e: React.FormEvent<EventTarget>, value: number) => {
        setTabValue(value);
    };

    /**
     * @function handleChangeLangcode Change local state for currently selected language.
     */
    const handleChangeLangcode = () => {
        if (langcode === 'cs') {
            setLangcode('en');
        } else {
            setLangcode('cs');
        }
    };

    useEffect(() => {
        if (window.location.pathname === '/' && tabValue !== 0) {
            setTabValue(0);
        } else if (window.location.pathname === '/aboutus' && tabValue !== 1) {
            setTabValue(1);
        } else if (window.location.pathname === '/contactus' && tabValue !== 2) {
            setTabValue(2);
        }
    }, []);

    return (
        <>
            <AppBar color='secondary' className={classes.root}>
                <Toolbar>
                    <HeaderProjectLogo />
                    {/** Navigation for desktop variant of the application.  */}
                    {matches ? <HeaderDrawerContainer /> : (
                        <HeaderDesktopAppbar
                            langcode={langcode}
                            tabValue={tabValue}
                            handleActiveTabChange={handleActiveTabChange}
                            handleChangeLangcode={handleChangeLangcode} />
                    )}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}></div>
        </>
    );
};

export default HeaderAppbar;
