import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderTitle from './Header-Title';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '7em',
        [theme.breakpoints.down('md')]: {
            height: '5.75em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em'
        }
    }
}));

/**
 * @function HeaderProjectLogo Displays application logo in the header's appbar.
 * @returns JSX with dynamic redux state data.
 */
const HeaderProjectLogo: React.FC = () => {

    const classes = useStyles();

    return (
        <Button className={classes.logo}>
            <HeaderTitle>
                <ProjectNameContainer />
            </HeaderTitle>
        </Button>
    );
};

export default HeaderProjectLogo;