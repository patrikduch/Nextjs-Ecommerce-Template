import { Button } from '@material-ui/core';
import React from 'react';
import HeaderTitle from './Header-Title';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';

const HeaderProjectLogo: React.FC = () => {
    return (
        <>
            <Button>
                <HeaderTitle>
                    <ProjectNameContainer />
                </HeaderTitle>
            </Button>
        </>
    );
};

export default HeaderProjectLogo;