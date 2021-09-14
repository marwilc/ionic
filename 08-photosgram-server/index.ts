import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import Server from './class/server';
import postRoutes from './routes/post';
import userRoutes from './routes/user';

const server = new Server();

// body parser
server.app.use(json());
server.app.use(urlencoded({ extended: true }));

// file upload
server.app.use(fileUpload());

// routes
server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/user', userRoutes);
server.app.use('/posts', postRoutes);

// cors

// DB connection
mongoose.connect(
    'mongodb://localhost:27017/photosgram',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;

        console.log('Database ONLINE');
    }
);

server.start(() => {
    console.log(`server running in port ${server.port}`);
});
