import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import FooterBasicInfo from './bottom-areas/Footer-Basic-Info'
import FooterContactUsInfo from './bottom-areas/Footer-ContactUs-Info';
import FooterCopyright from './Footer-Copyright';
import FooterPrimaryLinks from './bottom-areas/Footer-Primary-Links';
import FooterProjectInfo from './bottom-areas/Footer-Project-Info';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },

    footer: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6)
        }
    }
}));

/**
 * @function FooterContainer Encapsulation footer component, which consists all necesarry components.
 * @returns JSX content with severall nested footer bottom area components.
 */
const FooterContainer: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    <FooterProjectInfo />
                    <FooterPrimaryLinks />
                    <FooterBasicInfo />
                    <FooterContactUsInfo />
                </Grid>
            </Container>
            <FooterCopyright />
            {/* End footer */}
        </>
    );
};

export default FooterContainer;