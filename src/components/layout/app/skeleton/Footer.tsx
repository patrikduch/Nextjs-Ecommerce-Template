import { Typography } from '@material-ui/core';
import { ProjectNameContainer } from '@redux/containers/project-detail/Project-Detail-Container';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import React from 'react';
import styled from 'styled-components';

/**
 * @function FooterLayout Footer encapsulation component, which consists of basic styles to ensure that footer's content stays at the bottom.
 * @param className Generated classname via "styled-components" library.
 */
const FooterLayout: React.FC<IStyledComponentProps> = ({ className }) => {
    return (
        <footer className={className}>
            <Typography component='h3' variant='h5'>
                <>
                    2021 © <ProjectNameContainer />, Author: Patrik Duch
                </>
            </Typography>
        </footer>
    );
};

export default styled(FooterLayout)`
  flex-shrink: 0;
  text-align: center;
  padding: 1.15em;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;