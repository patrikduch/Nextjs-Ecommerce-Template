import { makeStyles, Tab } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    handleActiveTabChange: (e: React.FormEvent<EventTarget>, value: number) => void;
    label: string;
    url: string;
    value: number;
}

const useStyles = makeStyles((theme) => ({
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    }
}));

const HeaderMenuItem: React.FC<IProps> = ({ label, url, value, handleActiveTabChange }) => {
    const classes = useStyles();

    return (
        <Link href={url} passHref>
            <Tab className={classes.tab} label={label} onChange={handleActiveTabChange} value={value} />
        </Link>
    );
};

export default HeaderMenuItem;