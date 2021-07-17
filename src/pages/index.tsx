import React from "react";
import { NextPage } from "next";
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';

/**
 * @function Homepage Page component for root path.
 * @return JSX markup that consists all components for the Homepage.
 */
const Homepage: NextPage = () => {
  return (
    <>
      <ProjectNameContainer />
      HomePage
    </>
  );
};

export default Homepage;
