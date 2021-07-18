import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'src/i18n';

const useStyles = makeStyles(() => ({
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    }
}));

/**
 * @function FooterBasicInfo Basic information details for Footer section.
 * @returns Static JSX for displaying Basic information about owner of the website.
 */
const FooterBasicInfo: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation(['public/skeleton/footer/general-info']);

    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
                {t('general_info')}
            </Typography>

            <ul className={classes.ul}>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        {t('about_us')}
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        {t('terms_conditions')}
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        GDPR
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        {t('claims_returns')}
                    </Link>
                </li>
            </ul>
        </Grid>
    );
};

export default FooterBasicInfo;