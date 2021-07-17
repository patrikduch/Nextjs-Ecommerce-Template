import { makeStyles, Grid, Typography, Link } from '@material-ui/core';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';
import React from 'react';

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

    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
                <ProjectNameContainer />
            </Typography>

            <ul className={classes.ul}>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        Delivery Options
                    </Link>
                </li>
                <li>
                    <Link href="/#" variant="subtitle1" color="textSecondary">
                        FAQ
                    </Link>
                </li>
            </ul>
        </Grid>
    );
};

export default FooterPrimaryLinks;