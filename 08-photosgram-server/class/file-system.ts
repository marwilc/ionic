import fs from 'fs';
import path from 'path';
import uniqid from 'uniqid';
import { FileUpload } from '../interfaces/file-upload';

export default class FileSystem {
    constructor() {}

    saveTempImage(file: FileUpload, userId: string) {
        return new Promise((resolve, reject) => {
            const path = this.createFolderUser(userId);

            const name = this.generateUniqueName(file.name);

            file.mv(`${path}/${name}`, (err) => {
                if (err) {
                    // can't save file
                    reject(err);
                } else {
                    // all everything ok
                    resolve(name);
                }
            });

            console.log(name);
        });
    }

    private generateUniqueName(originalName: string) {
        const nameArray = originalName.split('.');
        const extension = nameArray[nameArray.length - 1];
        const idUnique = uniqid();

        return `${idUnique}.${extension}`;
    }

    private createFolderUser(userId: string) {
        const pathUser = path.resolve(
            __dirname,
            '../uploads/',
            userId
        );
        const pathUserTemp = pathUser + '/temp';

        const exist = fs.existsSync(pathUser);

        if (!exist) {
            fs.mkdirSync(pathUser);
            fs.mkdirSync(pathUserTemp);
        }

        return pathUserTemp;
    }

    imagesFromTempToPost(userId: string) {
        const pathTemp = path.resolve(
            __dirname,
            '../uploads/',
            userId,
            'temp'
        );
        const pathPost = path.resolve(
            __dirname,
            '../uploads/',
            userId,
            'posts'
        );

        if (!fs.existsSync(pathTemp)) {
            return [];
        }

        if (!fs.existsSync(pathPost)) {
            fs.mkdirSync(pathPost);
        }

        const tempImages = this.getTempImages(userId);

        tempImages.forEach((image) => {
            fs.renameSync(
                `${pathTemp}/${image}`,
                `${pathPost}/${image}`
            );
        });

        return tempImages;
    }

    private getTempImages(userId: string) {
        const pathUser = path.resolve(
            __dirname,
            '../uploads/',
            userId,
            'temp'
        );

        return fs.readdirSync(pathUser) || [];
    }

    getPhotoUrl(userId: string, img: string) {
        const pathPhoto = path.resolve(
            __dirname,
            '../uploads',
            userId,
            'posts',
            img
        );

        const exists = fs.existsSync(pathPhoto);

        if (!exists) {
            return path.resolve(__dirname, '../assets/400x250.jpg');
        }

        return pathPhoto;
    }
}
