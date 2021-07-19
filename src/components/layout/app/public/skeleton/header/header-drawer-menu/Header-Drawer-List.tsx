import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * @function HeaderDrawerList Content of header drawer ui component.
 * @returns JSX content that will be injected into Drawer UI component.
 */
const HeaderDrawerList: React.FC = () => {
    return (
        <>
            <List disablePadding>
                <ListItem onClick={() => console.log('set drawer to false')} divider button>
                    <ListItemText>Home</ListItemText>
                </ListItem>

                <ListItem divider button>
                    <ListItemText>About Us</ListItemText>
                </ListItem>

                <ListItem divider button>
                    <ListItemText>Contact Us</ListItemText>
                </ListItem>
            </List>
        </>
    );
}

export default HeaderDrawerList;