import styled from 'styled-components';
import IStyledComponentProps from '../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import ThemeType from '../../../typescript/types/shared/themes/Theme-Type';

/**
 * @interface IProps => Component`s props interface.
 */
 interface IProps
 extends
   IStyledComponentProps,
   ThemeType {
}

/**
 * @function BodyContainer Encapsulation stylization component for body section of the app.
 */
const BodyContainer: React.FC<IProps> = ({ children, className }) => {

    return (
        <main className={className}>
            {children}
        </main>
    );
}

export default styled(BodyContainer)`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;