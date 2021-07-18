import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';
import { useTranslation } from 'src/i18n';

/**
 * @function FooterProjectInfo Project info details for bottom footer section.
 * @returns  Static JSX that displays information about project in the footer section.
 */
const FooterProjectInfo: React.FC = () => {
    const { t } = useTranslation(['public/skeleton/footer/project-info']);
    return (
        <Grid item xs={6} sm={3}>
            <Typography variant="h4" color="textPrimary" gutterBottom>
                <ProjectNameContainer />
            </Typography>
            <Typography color="textPrimary" gutterBottom>
                {t('project_description')}
            </Typography>
        </Grid>
    );
};

export default FooterProjectInfo;