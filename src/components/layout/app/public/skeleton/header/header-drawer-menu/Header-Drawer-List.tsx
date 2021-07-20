import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    drawerItem: {
        ...theme.typography.tab,
    }
}));

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    closeDrawer: () => void;
}

/**
 * @function HeaderDrawerList Content of header drawer ui component.
 * @returns JSX content that will be injected into Drawer UI component.
 */
const HeaderDrawerList: React.FC<IProps> = ({ closeDrawer }) => {

    const classes = useStyles();

    return (
        <>
            <List disablePadding>
                <Link href={'/'} passHref>
                    <ListItem onClick={closeDrawer} divider button>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>

                <Link href={'/aboutus'} passHref>
                    <ListItem onClick={closeDrawer} divider button>
                        <ListItemText className={classes.drawerItem}>About Us</ListItemText>
                    </ListItem>
                </Link>

                <Link href={'/contactus'} passHref>
                    <ListItem onClick={closeDrawer} divider button>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default HeaderDrawerList;