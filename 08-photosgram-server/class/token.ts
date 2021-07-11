import { sign, verify } from 'jsonwebtoken';
import { Promise } from 'mongoose';
export default class Token {
    private static seed: string = 'este-es-el-seed-de-mi-app-secret';
    private static expire: string = '30d';

    constructor() {}

    static getJwtToken(payload: any): string {
        return sign(
            {
                user: payload,
            },
            this.seed,
            { expiresIn: this.expire }
        );
    }

    static checkToken(userToken: string): Promise<any> {
        return new Promise((resolve, reject) => {
            verify(userToken, this.seed, (err, decoded) => {
                if (err) {
                    // no confiar
                    reject();
                } else {
                    // confiar
                    resolve(decoded);
                }
            });
        });
    }
}
