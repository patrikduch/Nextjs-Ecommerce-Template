import React from "react";
import { NextPage } from "next";
import { Typography } from "@material-ui/core";
import MainContainer from '@components/layout/app/public/skeleton/Main-Container';

/**
 * @function AboutUsPage Page component for "About Us" page.
 * @return JSX markup that consists all components for the "About Us" page.
 */
const AboutUsPage: NextPage = () => {
    return (
        <MainContainer>
            <Typography variant='h2'>About Us</Typography>
        </MainContainer>
    );
};

export default AboutUsPage;
