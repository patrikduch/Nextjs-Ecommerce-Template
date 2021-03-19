import { Button } from '@material-ui/core';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import { i18n } from 'src/i18n';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
    displayName: string;
    isActive?: boolean;
    langCode: string;

}

/**
 * @function LanguageChooserCTA CTA button fotr changing current language.
 * @param className Generated classname via "styled-components" library.
 * @param displayName Button's label name.
 * @param isActive 
 * @param langName Language code for the particular CTA button.
 * @returns
 */
const LanguageChooserCTA: React.FC<IProps> = ({ className, displayName, isActive, langCode }) => {

    /**
    * Event handler for changin current language of whole admin portal.
    * @param langName String representation of target language ("cs", "en" etc.)
    */
    const handleLanguageChange = (langName: string) => {
        i18n.changeLanguage(langName);
    }

    return (
        <span className={className} >
            <Button variant={isActive ? 'contained' : null} color="primary" onClick={() => handleLanguageChange(langCode)}>{displayName.toLocaleUpperCase()}</Button>
        </span>
    );
};

export default styled(LanguageChooserCTA)`

    margin-right: 0.35vw;

`;