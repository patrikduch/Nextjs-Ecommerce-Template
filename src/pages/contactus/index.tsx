import React from "react";
import { NextPage } from "next";
import { Typography } from "@material-ui/core";
import MainContainer from '@components/layout/app/public/skeleton/Main-Container';

/**
 * @function ContactPage Page component for "Contact Us" page.
 * @return JSX markup that consists all components for the "Contact Us" page.
 */
const ContactPage: NextPage = () => {
    return (
        <MainContainer>
            <Typography variant='h2'>Contact Us</Typography>
        </MainContainer>
    );
};

export default ContactPage;
