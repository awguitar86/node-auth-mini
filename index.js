const express = require('express');
const session = require('express-session');
const passport = require('passport');
const strategy = require("./strategy");

const app = express();
app.use( session({
    secret: 'sup dude',
    resave: false,
    saveUninitialized: false
}));
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( startegy );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

passport.serializeUser(function(user, done){
    done(null, {id: user.id, display: user.display, nickname: user.nickname, emial: user.emial});
});

passport.deserializeUser(function(obj, done){
    done(null, obj);
});

app.get( '/login',
    passport.authenticate( 'auth0', 
        {successRedirect: '/me', failureRedirect: '/login', failureFlash: true}
    )
);

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );