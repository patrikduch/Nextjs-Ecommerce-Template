import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'src/i18n';

/**
 * @function ContactUsHeading Heading area for "ContactUs page component".
 * @returns 
 */
const ContactUsHeading: React.FC = () => {

    const { t } = useTranslation(['public/app/pages/contact-us-page']);

    return (
        <>
            <Typography variant='h2'>{t('page_title')}</Typography>
        </>
    );
}

export default ContactUsHeading;