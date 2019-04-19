const nodemailer = require("nodemailer");
exports.getIndex = (req, res) => {
 res.render('index');
}
exports.getDashboard = (req, res) => {
 res.render('dashboard', {title: 'dashboard'});
}
exports.getHelpline = (req, res) => {
    
 res.render('helpline', {title: 'helpline'});
}
exports.postHelpline = (req,res) => {
    console.log(req.body)
    async function main() {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "aanandbhandari143@gmail.com",
                pass: "Malaithaxaina123"
            }
        });
        let mailOptions = {
            from: `${req.body.name} ${req.body.email}`,
            to: "aanandbhandari@outlook.com",
            subject: `${req.body.subject}`,
            html: `<p>Message :</p></br>
                    <p>${req.body.message}</P>`
        };
        await transporter.sendMail(mailOptions)
        res.redirect('/')

    }
    main().catch(console.error);


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

exports.getRoadmap = (req, res) => {
 res.render('roadmap', {title: 'roadmap'});
}