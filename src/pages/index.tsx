import React from 'react';
import { NextPage } from 'next';
import { Typography } from '@material-ui/core';
import MainContainer from '@components/layout/app/public/skeleton/Main-Container';
/**
 * @function Homepage Page component for root path.
 * @return JSX markup that consists all components for the Homepage.
 */
const Homepage: NextPage = () => {
  return (
    <MainContainer>
      <Typography variant='h2'>HomePage</Typography>
    </MainContainer>
  );
};

export default Homepage;
