import { makeStyles } from '@material-ui/core';
import React from 'react';
import CommodityItemContent from './Commodity-Item-Content';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    title: string;
}

const useStyles = makeStyles({
    root: {
        minWidth: '30%',
        height: '240px',
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        margin: '0 7.5px 15px'
    }
})

/**
 * @function CommodityMenuItem Displays content of particular commodity block.
 * @param title Label for particular commodity block item.
 * @returns Box with commodity label information.
 */
const CommodityMenuItem: React.FC<IProps> = ({ title }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CommodityItemContent title={title} />
        </div>
    );
}

export default CommodityMenuItem;