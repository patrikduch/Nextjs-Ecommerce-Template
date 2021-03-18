import { Grid, Typography } from '@material-ui/core';
import MainContainer from '@components/layout/Main-Container';
import { useTranslation } from 'src/i18n';

/**
 * @function SettingsPage Admin settings page component.
 * @returns JSX markup.
 */
const SettingsPage: React.FC = () => {

    const { t } = useTranslation(['settingspage']);

    return (
        <MainContainer>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="h1" variant="h5">
                        {t('pagetitle')}
                    </Typography>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default SettingsPage;