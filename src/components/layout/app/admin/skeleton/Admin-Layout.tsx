import React from 'react';
import AdminHeaderAppbar from './header/header-desktop-menu/Admin-Header-Appbar';
import AdminHeaderContainer from './header/Admin-Header-Container';
import AdminHeaderContent from './header/Admin-Header-Content';
import AdminHeaderDrawer from './header/header-mobile-menu/Admin-Header-Drawer';
import AdminHeaderToolbar from './header/header-mobile-menu/Admin-Header-Toolbar';
import AdminHeaderDrawerList from './header/header-mobile-menu/Admin-Header-Drawer-List';

const AdminLayout: React.FC = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <AdminHeaderContainer>
            <AdminHeaderAppbar open={open} openAppBar={handleDrawerOpen} />
            <AdminHeaderDrawer open={open}>
                <AdminHeaderToolbar closeAppbar={handleDrawerClose} />
                <AdminHeaderDrawerList />
            </AdminHeaderDrawer>
            <AdminHeaderContent>
                {children}
            </AdminHeaderContent>
        </AdminHeaderContainer>
    );
}

export default AdminLayout;