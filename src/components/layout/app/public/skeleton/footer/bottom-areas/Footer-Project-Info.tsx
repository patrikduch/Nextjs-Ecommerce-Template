import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';

/**
 * @function FooterProjectInfo Project info details for bottom footer section.
 * @returns  Static JSX that displays information about project in the footer section.
 */
const FooterProjectInfo: React.FC = () => {
    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h4" color="textPrimary" gutterBottom>
                <ProjectNameContainer />
            </Typography>
            <Typography color="textPrimary" gutterBottom>
                E-commerce template powered by GraphQL and Next.js
            </Typography>
        </Grid>
    );
};

export default FooterProjectInfo;