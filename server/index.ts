import next from 'next';
import { routes } from './routes';
import express from 'express';
import passport from 'passport';
import {authRoutes} from '../routes/auth-routes';
//import passportSetUp from './passport-setup';
const passportSetUp = require('./passport-setup');

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app =  next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    express()
        .use(passport.initialize())
        .use('/', authRoutes)
        .use(handler)
        .listen(3000);
});
