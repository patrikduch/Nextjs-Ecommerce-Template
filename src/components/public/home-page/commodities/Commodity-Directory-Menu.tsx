import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'src/i18n';
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
    const { t } = useTranslation(['public/app/pages/home-page']);

    return (
        <div className={classes.root}>
            <CommodityMenuItem title={t('hats_category_title')} />
            <CommodityMenuItem title={t('jackets_category_title')} />
            <CommodityMenuItem title={t('sneakers_category_title')} />
            <CommodityMenuItem title={t('women_category_title')} />
            <CommodityMenuItem title={t('men_category_title')} />
        </div>
    );
}

export default CommodityDirectoryMenu;