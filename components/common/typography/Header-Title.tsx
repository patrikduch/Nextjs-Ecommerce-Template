import React from "react";
import styled, { css } from "styled-components";
import ThemeType from "../../../typescript/types/shared/themes/Theme-Type";
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* Component`s props interface */
interface IHeaderTitleProps extends ThemeType, IStyledComponentProps {}

/**
 * @function HeaderTitle => Component that displays title of application mostly => top heading.
 * @param children => Content node that is placed inside this common component.
 * @param className => Generated classname via "styled-components" library.
 */
const HeaderTitle: React.FC<IHeaderTitleProps> = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

/* Style of common component. */
export default styled(HeaderTitle)`

    text-align: center;
 
`;