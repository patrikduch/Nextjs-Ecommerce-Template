import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import MainLayout from './Main-Layout';
import Header from './Header';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

/**
 * @function MainLayout Encapsulation component that contains all necessary stylization for each admin page.
 * @param children Content node that is placed inside this common component.
 * @param className Generated classname via "styled-components" library.
 * @returns JSX designed content of administration.
 */
const MainContainer: React.FC<IProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            <MainLayout>
                {children}
            </MainLayout>
            <Footer />
        </div>
    );
};

export default styled(MainContainer)`
     flex: 1 0 auto;
     padding: 10px;
`;