import StyledDropdownMenu from './Styled-Dropdown-Menu';
import { MenuItem } from '@material-ui/core';
import { useRouter } from 'next/router';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
    anchorEl: Element;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
}

/**
 * @function AppBarDropdownMenu Component for triggering visibility state of dropdown menu. 
 * @param anchorEl Anchor element from which is dropdown triggered.
 * @param isMenuOpen State of menu visibility.
 * @param handleMenuClose  Event handler for opening and closing dropdown menu.
 */
const AppbarDropdownMenu: React.FC<IProps> = ({ anchorEl, isMenuOpen, handleMenuClose }) => {

    const menuId = 'primary-search-account-menu';
    const router = useRouter();

    return (
        <StyledDropdownMenu
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
            <MenuItem onClick={() => router.push("/profile")}>Můj účet</MenuItem>
            <MenuItem onClick={() => console.log("TODO: Logout functionality")}>Odhlásit se</MenuItem>
        </StyledDropdownMenu>
    );
}

export default AppbarDropdownMenu;