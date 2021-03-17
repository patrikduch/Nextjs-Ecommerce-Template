import IStyledComponentProps from "../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../typescript/types/shared/themes/Theme-Type";
import styled from "styled-components";

/* Component`s props interface */
interface IProps extends ThemeType, IStyledComponentProps {}

/**
 * @function PageContainer Stylization page component's wrapper.
 */
const PageContainer: React.FC<IProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default styled(PageContainer)`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;
