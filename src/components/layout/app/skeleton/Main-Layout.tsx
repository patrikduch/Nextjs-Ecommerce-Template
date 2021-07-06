import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

/**
 * @function MainLayout Stylization of main element for admin page.
 * @param children Content node that is placed inside this common component.
 * @param className Generated classname via "styled-components" library.
 */
const MainLayout: React.FC<IProps> = ({ children, className }) => {
    return (
        <main className={className}>
            {children}
        </main>
    );
};

export default styled(MainLayout)`
  display: flex;
  min-height: 90vh;
  flex-direction: column;
`;