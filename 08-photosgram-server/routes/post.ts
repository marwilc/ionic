import { Response, Router } from 'express';
import FileSystem from '../class/file-system';
import { FileUpload } from '../interfaces/file-upload';
import { checkToken } from '../middlewares/auth';
import { Post } from '../models/post.model';

const postRoutes = Router();
const fileSystem = new FileSystem();

postRoutes.get('/', async (req: any, res: Response) => {
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip *= 10;

    const posts = await Post.find()
        .sort({ _id: -1 })
        .skip(skip)
        .limit(10)
        .populate('user', '-password')
        .exec();

    res.json({
        ok: true,
        page,
        posts,
    });
});

postRoutes.post(
    '/',
    [checkToken],
    async (req: any, res: Response) => {
        const body = req.body;
        body.user = req.user._id;

        const images = fileSystem.imagesFromTempToPost(req.user._id);
        body.imgs = images;

        const post = await Post.create(body);

        const postDb = await post
            .populate('user', '-password')
            .execPopulate();

        res.json({
            ok: true,
            post: postDb,
        });
    }
);

// upload files

postRoutes.post(
    '/upload',
    [checkToken],
    async (req: any, res: Response) => {
        if (!req.files) {
            return res.status(400).json({
                ok: false,
                message: 'No upload some file',
            });
        }

        const file: FileUpload = req.files.image;

        if (!file || !file.mimetype.includes('image')) {
            return res.status(400).json({
                ok: false,
                message: 'No File Upload - image',
            });
        }

        try {
            const fileSaved = await fileSystem.saveTempImage(
                file,
                req.user._id
            );

            res.json({
                ok: true,
                name: fileSaved,
                file: file.mimetype,
            });
        } catch (error) {
            return res.status(400).json({
                ok: false,
                message: 'No File Upload - image',
            });
        }
    }
);

postRoutes.get('/images/:userId/:img', (req: any, res: Response) => {
    const userId = req.params.userId;
    const img = req.params.img;

    const pathPhoto = fileSystem.getPhotoUrl(userId, img);

    res.sendFile(pathPhoto);
});

export default postRoutes;
