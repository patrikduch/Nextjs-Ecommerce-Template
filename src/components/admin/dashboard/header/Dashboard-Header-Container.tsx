import React from 'react';
import DashboardHeaderTitle from './Dashboard-Header-Title';

/**
 * @function DashboardHeaderContainer Displays neader part of application for "Admin Dashboard".
 * @returns JSX with static content.
 */
const DashboardHeaderContainer: React.FC = () => {

    return (
        <>
            <DashboardHeaderTitle />
        </>
    );
}

export default DashboardHeaderContainer;