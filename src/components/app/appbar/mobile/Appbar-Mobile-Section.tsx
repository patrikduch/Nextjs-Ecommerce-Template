import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

const AppbarMobileSection: React.FC<IProps> = ({ children, className }) => {

    return (
        <div className={className}>
            { children}
        </div>
    );
}

export default styled(AppbarMobileSection)`

    display: flex;

    ${({ theme }) => theme.breakpoints.up('sm')} {
    display: none;
    }

`;