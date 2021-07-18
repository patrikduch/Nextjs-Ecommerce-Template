import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'src/i18n';

const useStyles = makeStyles(() => ({
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    li: {
        margin: 0,
        paddingTop: '0.433vh',
        paddingBottom: '0.433vh'
    }
}));

/**
 * @function FooterContactUsInfo Contact info for footer section.
 * @returns  Static JSX content for FooterContactUsInfo component.
 */
const FooterContactUsInfo: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation(['public/skeleton/footer/contact-info']);

    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
                {t('contact_info')}
            </Typography>

            <ul className={classes.ul}>
                <li className={classes.li}>Patrik Duch.</li>
                <li className={classes.li}>Ostravská 1619/48</li>
                <li className={classes.li}>73701 Český Těšín</li>
                <li className={classes.li}>IČ: 09225471</li>
            </ul>
        </Grid>

    );
};

export default FooterContactUsInfo;