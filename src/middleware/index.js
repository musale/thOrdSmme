import { Router } from 'express';

export default ({ db }) => {
    const routes = Router();
    routes.use((req, res, next) => {
        req.db = db;
        next();
    });
    return routes;
};
