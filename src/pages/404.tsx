import { NextPage } from 'next';
import Error from 'next/error';

/**
 * @function NotFound 404 error page handler.
 */
const NotFound: NextPage = () => {
    return <Error statusCode={404} />;
};

export default NotFound;