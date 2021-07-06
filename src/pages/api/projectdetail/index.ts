import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @function handler API handler for accessing information about web project.
 * @param req Incoming request object.
 * @param res Response request object.
 */
function handler(req: NextApiRequest, res: NextApiResponse): void {
    res.status(200).json({
        projectName: 'Nextjs Redux Wrapper'
    });
}

export default handler;
