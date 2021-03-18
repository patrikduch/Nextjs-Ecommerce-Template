import React from "react";
import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from "@material-ui/core";

/**
 * @function Home  Page component for root path.
 */
const Home: React.FC = () => {
  return (
    <MainContainer>
      <Grid container>
        <Grid item xs={10}>
          <Typography component="h1" variant="h5">
            Dashboard
            </Typography>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Home;
