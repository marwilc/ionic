import { Mongoose } from 'mongoose';
import Server from './class/server';
import userRoutes from './routes/user';

const server = new Server();
const dbMongoose = new Mongoose();

// routes
server.app.use('/user', userRoutes);

// DB connection
dbMongoose.connect(
    'mongodb://localhost:27017/photosgram',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    },
    (err) => {
        if (err) throw err;

        console.log('Database ONLINE');
    }
);

server.start(() => {
    console.log(`server running in port ${server.port}`);
});
