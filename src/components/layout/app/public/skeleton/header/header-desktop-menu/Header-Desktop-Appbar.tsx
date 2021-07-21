import React from 'react';
import { useTranslation } from 'src/i18n';
import HeaderLanguageChooser from '../Header-Language-Chooser';
import HeaderMenuContainer from './Header-Menu-Container';
import HeaderMenuItem from './Header-Menu-Item';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {
    tabValue: number;
    langcode: string;
    handleActiveTabChange: (e: React.FormEvent<EventTarget>, value: number) => void;
    handleChangeLangcode: () => void;
}

/**
 * @function HeaderDesktopAppbar Desktop version of appbar that is composed from HeaderMenuContainer and HeaderMenuItem components.
 * @param props
 * @returns JSX with encapsulated components HeaderMenuContainer and HeaderMenuItem.
 */
const HeaderDesktopAppbar: React.FC<IProps> = (props) => {

    const { t } = useTranslation(['public/skeleton/header/appbar']);

    return (
        <HeaderMenuContainer tabValue={props.tabValue}>
            <HeaderMenuItem
                label={t('home')}
                url='/'
                value={0}
                handleActiveTabChange={props.handleActiveTabChange} />

            <HeaderMenuItem
                label={t('aboutus')}
                url='/aboutus'
                value={1}
                handleActiveTabChange={props.handleActiveTabChange} />

            <HeaderMenuItem
                label={t('contact_us')}
                url='/contactus'
                value={2}
                handleActiveTabChange={props.handleActiveTabChange} />
            <HeaderLanguageChooser langCode={props.langcode} changeLang={props.handleChangeLangcode} />
        </HeaderMenuContainer>
    );
}

export default HeaderDesktopAppbar;