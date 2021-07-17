import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    }
}));

/**
 * @function MainLayout Stylization of main element for admin page.
 */
const MainLayout: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            {children}
        </main>
    );
};

export default MainLayout;
