import MainLayout from '@components/layout/Main-Layout';
import { Grid, Typography } from '@material-ui/core';

/**
 * @function SettingsPage Admin settings page component.
 * @returns JSX markup.
 */
const SettingsPage: React.FC = () => {
    return (
        <MainLayout>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="h1" variant="h5">
                        Settings
                    </Typography>
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default SettingsPage;