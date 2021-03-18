import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled, { css } from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
    open: boolean;
}

/**
 * @function MainLayout Stylization of main element for admin page.
 */
const MainLayout: React.FC<IProps> = ({ children, className }) => {

    return (
        <main className={className}>
            { children}
        </main>
    );
}

export default styled(MainLayout)`

margin-top: 64px;
  margin-left: 75px;
  padding: 30px;

  transition: ${({ theme }) =>
        theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};

  ${({ open }) =>
        open &&
        css`
      margin-left: 240px;
    `}
`