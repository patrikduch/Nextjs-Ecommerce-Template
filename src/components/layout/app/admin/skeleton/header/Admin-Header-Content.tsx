import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: theme.spacing(7)
    }
}));

/**
 * @function AdminHeaderContent Encapsulation component for admin portal content.
 * @param children Nested Admin header components.
 * @returns Custom main element component.
 */
const AdminHeaderContent: React.FC = ({ children }) => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Container>
                {children}
            </Container>
        </main>
    );
}

export default AdminHeaderContent;