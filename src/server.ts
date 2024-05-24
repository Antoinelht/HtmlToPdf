import express from 'express';
import path from 'path';

export default class Server {
    
    readonly port: number;

    constructor(port: number) {
        this.port = port;

    }

    start () {
        const app = express();
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'index.html'));
        });
        app.listen(this.port, () => {
            console.log(`Server started at http://localhost:${this.port}`);
        })
    }
}