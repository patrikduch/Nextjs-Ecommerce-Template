import { makeStyles } from '@material-ui/core';
import React from 'react';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    title: string;
}

const useStyles = makeStyles({
    root: {
        height: '90px',
        padding: '0 25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black'
    },

    title: {
        fontWeight: 'bold',
        marginBottom: '6px',
        fontSize: '22px',
        color: '#4a4a4a'
    },

    subtitle: {
        fontWeight: 'lighter',
        fontSize: '16px'
    }
})

/**
 * @function CommodityItemContent Displays content of single  commodity block. 
 * @param title  Title of particular commodity block.
 * @returns Div block with commodity content.
 */
const CommodityItemContent: React.FC<IProps> = ({ title }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>{title}</div>
            <span className={classes.subtitle}>SHOP NOW</span>
        </div>

    );
}

export default CommodityItemContent;