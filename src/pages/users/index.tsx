import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';

/**
 * @function UserPage User page component.
 * @returns JSX markup for listing collection of users.
 */
const UserPage: React.FC = () => {
    return (
        <MainContainer>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="h1" variant="h5">
                        Users
                    </Typography>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default UserPage;