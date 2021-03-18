import MainLayout from '@components/layout/Main-Layout';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

/**
 * @function UserPage User page component.
 * @returns JSX markup for listing collection of users.
 */
const UserPage: React.FC = () => {

    return (
        <MainLayout>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="h1" variant="h5">
                        Users
                    </Typography>
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default UserPage;