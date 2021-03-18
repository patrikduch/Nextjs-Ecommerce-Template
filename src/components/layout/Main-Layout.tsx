import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from '../../i18n';
import LeftMenuBar from './LeftMenu-Bar';
import TopMenuBar from './TopMenu-Bar';

const Root = styled.div`
  display: flex;
`;

const Main = styled.div<{ open: boolean }>`
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
`;

/**
 * @function MainLayout Encapsulation component that contains all necessary stylization for each admin page.
 * @param children  Nested content that can be passed into this encapsulation component.
 * @returns JSX designed content of administration.
 */
const MainLayout: React.FC = ({ children }) => {
    const { t } = useTranslation('common');
    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Root>
            <TopMenuBar />
            <LeftMenuBar drawerOpen={drawerOpen} handleToggleDrawer={handleToggleDrawer} />
            <Main open={drawerOpen}>{children}</Main>
        </Root>
    );
};

export default MainLayout;
