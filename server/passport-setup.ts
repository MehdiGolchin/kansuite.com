import passport from 'passport';
import keys from './keys';
import passwordGithub from 'passport-github';

const GithubStrategy = passwordGithub.Strategy;

passport.use(
    new GithubStrategy({
        // options for google strategy
        clientID: keys.github.clientID,
        clientSecret: keys.github.clientSecret,
        callbackURL: '/github/redirect'
    }, (accessToken: any, refreshToken: any, profile: any, done: any) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
        done(null, { username: profile.username });
    })
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});