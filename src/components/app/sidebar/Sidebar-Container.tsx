import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import { i18n } from 'src/i18n';
import LanguageChooserContainer from '@components/app/language-chooser/Language-Chooser-Container';
import LanguageChooserCTA from '@components/app/language-chooser/Language-Chooser-CTA';
import List from '@material-ui/core/List';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import styled from 'styled-components';
import { Link, useTranslation } from '../../../i18n';
import SidebarDrawer from './Sidebar-Drawer';

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


/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
    drawerOpen?: boolean;
    handleToggleDrawer?: () => void;
}

/**
 * @function SidebarContainer Left sidebar for admin portal.
 * @param drawerOpen State of menu visibility.
 * @param handleToggleDrawer Event handler for chaning menu visibility.
 * @returns JSX markup for displaying all components of left admin siderbar.
 */
const SideBarContainer: React.FC<IProps> = ({ drawerOpen, handleToggleDrawer }) => {

    const { t } = useTranslation(['sidebar']);

    return (
        <SidebarDrawer variant="permanent" open={drawerOpen} PaperProps={{ component: StyledPaper }}>
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
                        <ListItemText primary={t('users_sideitem_label')} />
                    </StyledListItem>
                </Link>
                <Link href="/settings">
                    <StyledListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('settings_sideitem_label')} />
                    </StyledListItem>
                </Link>

                <hr />

                <LanguageChooserContainer>
                    <LanguageChooserCTA langCode='en' displayName='en' isActive={i18n.language == 'en'} />
                    <LanguageChooserCTA langCode='cs' displayName='cz' isActive={i18n.language == 'cs'} />
                </LanguageChooserContainer>

            </List>
            <ToggleMenu button onClick={handleToggleDrawer}>
                <ListItemIcon>
                    <MenuOpenIcon />
                </ListItemIcon>
            </ToggleMenu>



        </SidebarDrawer>
    );
};

export default SideBarContainer;
