import React from "react";
import { NextPage } from "next";
import AdminLayout from "@components/layout/app/admin/skeleton/Admin-Layout";
import DashboardHeaderContainer from "@components/admin/dashboard/header/Dashboard-Header-Container";
import DashboardBodyContainer from "@components/admin/dashboard/body/Dashboard-Body-Container";

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

export default DashboardPage;
