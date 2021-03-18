import AppbarAccountInfo from '../app/appbar/Appbar-Account-Info';
import AppBarDesktopSection from '@components/app/appbar/desktop/Appbar-Desktop-Section';
import AppBarMobileSection from '@components/app/appbar/mobile/Appbar-Mobile-Section';
import AppbarNavitem from '@components/app/appbar/Appbar-Nav-Item';

import { Menu, MenuItem } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useState } from 'react';
import styled from 'styled-components';
import StyledAppBar from '@components/app/appbar/Styled-Appbar';
import StyledToolbar from '@components/app/appbar/Styled-Toolbar';
import { Link } from '../../i18n';
import AppbarMenu from '@components/app/appbar/menu/Appbar-Dropdown-Menu';


const UserEmail = styled(Typography)`
  margin-left: 5px;
`;

const TopMenuBar: React.FC = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <StyledAppBar color="primary" position="fixed">
                <StyledToolbar>
                    <Link href="/">
                        <AppbarNavitem variant="h6" color="inherit" noWrap>
                            Název projektu
                        </AppbarNavitem>
                    </Link>
                    <AppBarDesktopSection>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <AppbarAccountInfo onClick={handleProfileMenuOpen} color="inherit">
                            <AccountCircle />
                            <UserEmail>{"duchpatrik@icloud.com"}</UserEmail>
                        </AppbarAccountInfo>
                    </AppBarDesktopSection>

                    <AppBarMobileSection>
                        <IconButton onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </AppBarMobileSection>
                </StyledToolbar>
            </StyledAppBar>
            {renderMobileMenu}
            <AppbarMenu anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
        </>
    );
};

export default TopMenuBar;
