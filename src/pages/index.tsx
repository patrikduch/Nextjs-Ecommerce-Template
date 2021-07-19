import React from 'react';
import { NextPage } from 'next';
import { Typography } from '@material-ui/core';
/**
 * @function Homepage Page component for root path.
 * @return JSX markup that consists all components for the Homepage.
 */
const Homepage: NextPage = () => {
  return (
    <>
      <Typography variant='h2'>HomePage</Typography>
    </>
  );
};

export default Homepage;
