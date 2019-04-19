exports.getIndex = (req, res) => {
 res.render('index');
}
exports.getDashboard = (req, res) => {
 res.render('dashboard', {title: 'dashboard'});
}
exports.getHelpline = (req, res) => {
 res.render('helpline', {title: 'helpline'});
}
exports.getEvents = (req, res) => {
 res.render('events', {title: 'events'});
}
exports.getBlogs = (req, res) => {
 res.render('blogs', {title: 'blogs'});
}

exports.getAbout = (req, res) => {
 res.render('about', {title: 'about'});
}