import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function AboutUsHeading Heading area for "AboutUs page component".
 * @returns Heading content for AboutUs page component.
 */
const AboutUsHeading: React.FC = () => {

    const { t } = useTranslation(['public/app/pages/about-us-page']);

    return (
        <>
            <Typography variant='h2'>{t('page_title')}</Typography>
        </>
    );
}

export default AboutUsHeading;