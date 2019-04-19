exports.getSignup = (req, res) => {
    res.render('signup');
}
exports.postSignup = (req, res) => {
    res.redirect('/users/profile');
}
exports.profile = (req, res) => {
    res.render('profile', { title: 'profile' });
}