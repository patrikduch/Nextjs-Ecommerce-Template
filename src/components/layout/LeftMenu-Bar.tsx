import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import styled, { css } from 'styled-components';
import { Link } from '../../i18n';

const StyledDrawer = styled(Drawer)`
  z-index: ${({ theme }) => theme.zIndex.drawer};

  overflow: hidden;
  width: 75px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  transition: ${({ theme }) =>
        theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })};

  ${({ open, theme }) =>
        open &&
        css`
      width: 240px;

      transition: ${theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};
    `}
`;

const StyledPaper = styled.div`
  margin-top: 64px;
  width: 240px;
  position: relative;
  display: flex;
`;

const StyledListItem = styled(ListItem)`
  padding-left: 25px;
`;

const ToggleMenu = styled(StyledListItem)`
  display: inline-flex;
  position: absolute;
  bottom: 70px;
`;

interface LeftMenuBarProps {
    drawerOpen?: boolean;
    handleToggleDrawer?: () => void;
}

const LeftMenuBar: React.FC<LeftMenuBarProps> = ({ drawerOpen, handleToggleDrawer }) => {
    return (
        <StyledDrawer variant="permanent" open={drawerOpen} PaperProps={{ component: StyledPaper }}>
            <List>
                <Link href="/">
                    <StyledListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </StyledListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href="/users">
                    <StyledListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </StyledListItem>
                </Link>
                <Link href="/settings">
                    <StyledListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </StyledListItem>
                </Link>
            </List>
            <ToggleMenu button onClick={handleToggleDrawer}>
                <ListItemIcon>
                    <MenuOpenIcon />
                </ListItemIcon>
            </ToggleMenu>
        </StyledDrawer>
    );
};

export default LeftMenuBar;
