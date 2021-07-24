import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

/**
 * @function AdminHeaderList Navigation items for mobile administration navigation.
 * @returns List of navigation content for admin portal.
 */
const AdminHeaderDrawerList: React.FC = () => {
    return (
        <>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </>
    );
}

export default AdminHeaderDrawerList;