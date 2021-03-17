import LeftMenuBar from '@components/layout/LeftMenu-Bar';
import PageContainer from '@components/Page-Container';
import TopMenuBar from '@components/layout/TopMenu-Bar';

/**
 * @function LayoutContainer Encapsulation of layout design, that is shared for each admin page.
 */
const LayoutContainer: React.FC = ({ children }) => {

    return (
        <PageContainer>
            { children}
            <TopMenuBar />
            <LeftMenuBar />
        </PageContainer>
    );
};

export default LayoutContainer;