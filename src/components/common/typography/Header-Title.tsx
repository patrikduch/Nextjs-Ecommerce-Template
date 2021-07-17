/**
 * @function HeaderTitle Component that displays title of application mostly => top heading.
 * @param children Content node that is placed inside this common component.
 */
const HeaderTitle: React.FC = ({ children }) => {
  return <h1>{children}</h1>;
};

/*
export default styled(HeaderTitle)`
  text-align: center;
`;
*/

export default HeaderTitle;