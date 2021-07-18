import { makeStyles, Grid, Typography, Link } from '@material-ui/core';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';
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
 * @function FooterPrimaryLinks Additiona footer links.
 * @returns Static JSX content.
 */
const FooterPrimaryLinks: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation(['public/skeleton/footer/project-info']);

    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
                <ProjectNameContainer />
            </Typography>

            <ul className={classes.ul}>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        {t('privacy_policy')}
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        {t('delivery_options')}
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        {t('faq')}
                    </Link>
                </li>
            </ul>
        </Grid>
    );
};

export default FooterPrimaryLinks;