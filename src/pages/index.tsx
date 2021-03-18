import React from "react";
import MainLayout from "@components/layout/Main-Layout";
import { Grid, Typography } from "@material-ui/core";

/**
 * @function Home  Page component for root path.
 */
const Home: React.FC = () => {
  return (
    <MainLayout>
      <Grid container>
        <Grid item xs={10}>
          <Typography component="h1" variant="h5">
            Dashboard
            </Typography>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
