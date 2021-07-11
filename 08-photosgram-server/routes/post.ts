import { Response, Router } from 'express';
import { checkToken } from '../middlewares/auth';
import { Post } from '../models/post.model';

const postRoutes = Router();

postRoutes.post(
    '/',
    [checkToken],
    async (req: any, res: Response) => {
        const body = req.body;
        body.user = req.user._id;

        await Post.create(body);

        res.json({
            ok: true,
            body,
        });
    }
);

export default postRoutes;
