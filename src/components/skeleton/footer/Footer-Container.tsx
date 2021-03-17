import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from '../../../typescript/types/shared/themes/Theme-Type';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType { }

/**
 * @function FooterContainer Encapsulation stylization for footer section.
 * @returns
 */
const FooterContainer: React.FC<IProps> = ({ className, children }) => {
  return <footer className={className}>{children}</footer>;
};

export default styled(FooterContainer)`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
