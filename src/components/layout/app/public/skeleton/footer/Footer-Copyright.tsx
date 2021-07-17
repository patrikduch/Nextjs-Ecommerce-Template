import { makeStyles, Typography } from '@material-ui/core';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        flexShrink: 0,
        textAlign: 'center',
        padding: '1.15em',
        color: 'black'
    }
}));

/**
 * @function FooterCopyright Footer encapsulation component, which consists of basic styles to ensure that footer's copyright stays at the bottom.
 */
const FooterCopyright: React.FC = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.root} component='h3' variant='h5'>
            <>
                2021 © <ProjectNameContainer />, Author: Patrik Duch
            </>
        </Typography>
    );
};

export default FooterCopyright;