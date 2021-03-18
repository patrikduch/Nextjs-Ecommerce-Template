import { Grid, Typography } from '@material-ui/core';
import MainContainer from '@components/layout/Main-Container';

/**
 * @function SettingsPage Admin settings page component.
 * @returns JSX markup.
 */
const SettingsPage: React.FC = () => {
    return (
        <MainContainer>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="h1" variant="h5">
                        Settings
                    </Typography>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default SettingsPage;