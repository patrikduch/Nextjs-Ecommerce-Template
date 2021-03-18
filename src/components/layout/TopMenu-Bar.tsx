import AppBarDesktopSection from '@components/app/appbar/desktop/Appbar-Desktop-Section';
import AppBarMobileSection from '@components/app/appbar/mobile/Appbar-Mobile-Section';
import AppbarNavitem from '@components/app/appbar/Appbar-Nav-Item';
import { Button, Menu, MenuItem } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import StyledAppBar from '@components/app/appbar/Styled-Appbar';
import StyledToolbar from '@components/app/appbar/Styled-Toolbar';
import { Link } from '../../i18n';


const AccountDetail = styled(Button)`
  text-transform: none;
`;

const UserEmail = styled(Typography)`
  margin-left: 5px;
`;

const StyledMenu = styled(Menu)`
  transform: translate(0, 50px);
`;

const TopMenuBar: React.FC = () => {
    const router = useRouter();

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

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <StyledMenu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => router.push('/')}>Můj účet</MenuItem>
            <MenuItem onClick={null}>Odhlásit se</MenuItem>
        </StyledMenu>
    );

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
                            Bc. Patrik Duch
                        </AppbarNavitem>
                    </Link>
                    <AppBarDesktopSection>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <AccountDetail onClick={handleProfileMenuOpen} color="inherit">
                            <AccountCircle />
                            <UserEmail>{"duchpatrik@icloud.com"}</UserEmail>
                        </AccountDetail>
                    </AppBarDesktopSection>

                    <AppBarMobileSection>
                        <IconButton onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </AppBarMobileSection>
                </StyledToolbar>
            </StyledAppBar>
            {renderMobileMenu}
            {renderMenu}
        </>
    );
};

export default TopMenuBar;
