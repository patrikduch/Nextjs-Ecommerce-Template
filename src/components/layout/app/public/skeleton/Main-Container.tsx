import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import MainLayout from './Main-Layout';
import FooterContainer from './footer/Footer-Container';
import HeaderAppbar from './header/Header-Appbar';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: '2.6vh'
    }
}));

/**
 * @function MainContainer Encapsulation component that contains all necessary stylization for each admin page.
 * @param children Content node that is placed inside this common component.
 * @returns JSX designed content of administration.
 */
const MainContainer: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" component="main" className={classes.root}>
            <HeaderAppbar />
            <MainLayout>
                {children}
            </MainLayout>
            <FooterContainer />
        </Container>
    );
};

export default MainContainer;