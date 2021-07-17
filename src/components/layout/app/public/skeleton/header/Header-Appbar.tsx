import { AppBar, Button, Tab, Tabs, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderTitle from './Header-Title';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    root: {
        backgroundColor: '#000000'
    },
    tabContainer: {
        marginLeft: 'auto',
        color: '#ffff'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    freeEstimateBtn: {
        borderRadius: '50px',
        marginLeft: '25px',
        marginRight: '25px'
    }
}));

/**
 * @function HeaderAppbar Header custom appbar.
 * @returns JSX that renders header navigation bar.
 */
const HeaderAppbar: React.FC = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);

    /**
     * @function handleActiveTabChange Change active indicator for appbar navigation.
     * @param value Value of newly selected page.
     */
    const handleActiveTabChange = (e, value) => {
        setTabValue(value);
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
                    <Button>
                        <HeaderTitle>
                            <ProjectNameContainer />
                        </HeaderTitle>
                    </Button>
                    <Tabs value={tabValue} className={classes.tabContainer}>
                        <Link href="/" passHref>
                            <Tab className={classes.tab} label="Home" onChange={handleActiveTabChange} value={0} />
                        </Link>
                        <Link href="/aboutus" passHref>
                            <Tab className={classes.tab} label="About Us" onChange={handleActiveTabChange} value={1} />
                        </Link>
                        <Link href="/contactus" passHref>
                            <Tab className={classes.tab} label="Contact Us" onChange={handleActiveTabChange} value={2} />
                        </Link>
                    </Tabs>
                    <Button className={classes.freeEstimateBtn} variant='contained' color='secondary'>
                        Sign In
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}></div>
        </>
    );
};

export default HeaderAppbar;