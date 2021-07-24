import { makeStyles } from '@material-ui/core';
import React from 'react';
import CommodityMenuItem from './Commodity-Menu-Item';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

/**
 * @function CommodityDirectoryMenu Displays encapsulation component for all commodity menu preview components.
 * @returns Encapsulation component for all commodity previews.
 */
const CommodityDirectoryMenu: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CommodityMenuItem title='HATS' />
            <CommodityMenuItem title='JACKETS' />
            <CommodityMenuItem title='SNEAKERS' />
            <CommodityMenuItem title='WOMEN' />
            <CommodityMenuItem title='MEN' />
        </div>
    );
}

export default CommodityDirectoryMenu;