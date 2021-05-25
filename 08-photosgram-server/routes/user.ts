import { Request, Response, Router } from 'express';

const userRoutes = Router();

userRoutes.get('/test', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All everything work good',
    });
});

export default userRoutes;
