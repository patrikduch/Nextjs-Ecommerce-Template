import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

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

    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
                Information
            </Typography>

            <ul className={classes.ul}>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        Terms {'& Conditions'}
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        GDPR
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        Claims and Returns
                    </Link>
                </li>
            </ul>
        </Grid>
    );
};

export default FooterBasicInfo;