import { version } from '../../package.json';
import { Router } from 'express';

export default () => {
    const api = Router();

    api.get('/', (req, res) => {
        res.json({ version });
    });
    api.post('/', (req, res) => {
        res.status(405).json({ error: 'method POST to /api/v1 is not allowed.' });
    });

    return api;
};
