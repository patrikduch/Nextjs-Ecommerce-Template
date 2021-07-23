import React from "react";
import { NextPage } from "next";
import AdminLayout from "@components/layout/app/admin/skeleton/Admin-Layout";
import DashboardHeaderContainer from "@components/admin/dashboard/header/Dashboard-Header-Container";
import DashboardBodyContainer from "@components/admin/dashboard/body/Dashboard-Body-Container";
import { getProjectDetail } from "@redux/actions/project-detail";
import StoreTypeObj from "@typescript/types/shared/redux/thunk/Store-Type";
import { wrapper } from "@redux/store";

/**
 * @function DashboardPage Admin dashboard page component.
 * @return JSX markup that consists all components for the "Admin Dashbord" page.
 */
const DashboardPage: NextPage = () => {

    return (
        <AdminLayout>
            <DashboardHeaderContainer />
            <DashboardBodyContainer />
        </AdminLayout>
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

export default DashboardPage;
