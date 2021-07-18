import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import { i18n } from 'src/i18n';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    langCode: string;
    changeLang: () => void;
}

const useStyles = makeStyles({
    languageBtn: {
        color: '#ffff',
        marginLeft: '25px',
        marginRight: '25px'
    }
});

/**
 * @function HeaderLanguageChooser Language selection by it's langcode.
 * @param langCode code of particular language.
 * @param changeLang Event for hanging particular language.
 * @returns JSX with language chooser functionality.
 */
const HeaderLanguageChooser: React.FC<IProps> = ({ changeLang, langCode }) => {
    const classes = useStyles();

    /**
     * @function getLangImage get path to the currently selected language.
     * @param langCode Code of particular language.
     * @returns Path to the particular lang image.
     */
    const getLangImage = (langCode: string): string => {
        switch (langCode) {
            case 'cs':
                return '/czechflag.png';
            case 'en':
                return '/usaflag.jpg';
        }
    };

    /**
     * @function getLangname Get Current langname to display on the header appbar.
     * @param langCode Code of particular language.
     * @returns Langname that will be displayed on header's appbar.
     */
    const getLangname = (langCode: string): string => {
        switch (langCode) {
            case 'cs':
                return 'CZ';
            case 'en':
                return 'EN';
        }
    };

    /**
     * @function handle
     */
    const handleTest = () => {
        if (langCode === 'en') {
            i18n.changeLanguage('cs');
        } else {
            i18n.changeLanguage('en');
        }
        changeLang();
    };

    return (
        <>
            {langCode}
            <Button type='button' className={classes.languageBtn} onClick={() => handleTest()}>
                <Image src={getLangImage(langCode)} alt='Logo of the website' width={25} height={15} /> &nbsp; {getLangname(langCode)}
            </Button>
        </>
    );
};

export default HeaderLanguageChooser;
