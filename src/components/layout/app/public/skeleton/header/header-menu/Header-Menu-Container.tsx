import { makeStyles, Tabs } from '@material-ui/core';
import React from 'react';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    tabValue: number;
}

const useStyles = makeStyles(() => ({
    tabContainer: {
        marginLeft: 'auto',
        color: '#ffff'
    }
}));

/**
 * @function HeaderMenuContainer Menu composer component.
 * @param children Nested navigation items.
 * @returns JSX with nested navigation items.
 */
const HeaderMenuContainer: React.FC<IProps> = ({ children, tabValue }) => {
    const classes = useStyles();

    return (
        <Tabs value={tabValue} className={classes.tabContainer}>
            {children}
        </Tabs>
    );
};

export default HeaderMenuContainer;