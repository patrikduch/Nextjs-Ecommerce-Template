import LeftMenuBar from '@components/layout/LeftMenu-Bar';
import TopMenuBar from '@components/layout/TopMenu-Bar';
import MainLayout from './Main-Layout';

/**
 * @function LayoutContainer Encapsulation of layout design, that is shared for each admin page.
 */
const LayoutContainer: React.FC = ({ children }) => {

    return (
        <>
            <MainLayout>
                {children}
            </MainLayout>
            <TopMenuBar />
            <LeftMenuBar />
        </>
    );
};

export default LayoutContainer;