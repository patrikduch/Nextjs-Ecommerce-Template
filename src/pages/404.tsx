import { NextPage } from 'next';
import Error from 'next/error';
import MainContainer from '@components/layout/app/public/skeleton/Main-Container';

/**
 * @function NotFound 404 error page handler.
 */
const NotFound: NextPage = () => {
    return (
        <MainContainer>
            <Error statusCode={404} />
        </MainContainer>
    );
};

export default NotFound;