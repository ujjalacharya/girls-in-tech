var firebase = require("firebase/app");
var database = firebase.database();
exports.getSignup = (req, res) => {
    res.render('signup');
}
exports.postSignup = (req, res) => {
    function writeUserData(name, email) {
        firebase.database().ref('/users').set({
            username: name,
            email: email
        });
    }
    writeUserData(req.body.name, req.body.email)
    res.redirect('/users/profile');
}
exports.profile = (req, res) => {
    let users = firebase.database().ref('/users/');
    users.on('value', function (user) {
        console.log(user.val());
    })
    // .then(user => {
    //     console.log(user);
    //     users.off('value')
    // }).catch(e=>console.log(e))
    res.render('profile', { title: 'profile' });
}