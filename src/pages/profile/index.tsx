import { Grid, Typography } from '@material-ui/core';
import MainContainer from '@components/layout/Main-Container';

/**
 * @function ProfilePage Display information about current administrator.
 */
const ProfilePage: React.FC = () => {
    return (
        <MainContainer>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="h1" variant="h5">
                        Profile
                </Typography>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default ProfilePage;