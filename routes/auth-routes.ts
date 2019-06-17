import passport from 'passport';
import routes from 'express';

export const authRoutes = routes.Router();

// auth login
// authRoutes.get('/login', (req: any, res: any) => {
//     res.render('login', { user: req.user });
// });

// auth logout
authRoutes.get('/logout', (req: any, res: any) => {
    // handle with passport
    res.send('logging out');
});

// auth with github
authRoutes.get('/github', passport.authenticate('github', {
    scope: ['profile']
}));

// hand control to passport to use code to grab profile info
authRoutes.get('/github/redirect', passport.authenticate('github'), (req: any, res: any) => {
    res.send('you reached the redirect URI');
});
