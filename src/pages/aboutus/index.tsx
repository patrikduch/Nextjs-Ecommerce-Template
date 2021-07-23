import React from "react";
import { NextPage } from "next";
import { Typography } from "@material-ui/core";
import MainContainer from '@components/layout/app/public/skeleton/Main-Container';
import { wrapper } from "@redux/store";
import StoreTypeObj from "@typescript/types/shared/redux/thunk/Store-Type";
import { getProjectDetail } from "@redux/actions/project-detail";

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

/**
 * @function getServerSideProps SSR preprocessing of Userpage component.
 */
export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        const { store } = context;
        await (store as StoreTypeObj).dispatch(getProjectDetail());

        return {
            props: {
                projectDetail: (store.getState()).projectDetail
            }
        };
    }
);

export default AboutUsPage;
