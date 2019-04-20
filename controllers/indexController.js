const nodemailer = require("nodemailer");
const { key } = require("../config/key");

const { mockData, courseData} = require('./mock/mockdata');
const eventData = require("./mock/eventMockData");

exports.getIndex = (req, res) => {
    res.render('index');
}
exports.getDashboard = (req, res) => {
    res.render('dashboard', { title: 'dashboard', mockData });
}
exports.getHelpline = (req, res) => {

    res.render('helpline', { title: 'helpline' });
}
exports.postHelpline = (req, res) => {
    console.log(req.body)
    async function main() {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "aanandbhandari143@gmail.com",
                pass: key
            }
        });
        let mailOptions = {
            from: `${req.body.name} ${req.body.email}`,
            to: "acharyaujjal1@gmail.com",
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
    res.render('events', { title: 'events',  eventData});
}
exports.getBlogs = (req, res) => {
    res.render('blogs', { title: 'blogs' });
}

exports.getAbout = (req, res) => {
    res.render('about', { title: 'about' });
}

exports.getRoadmap = (req, res) => {
    res.render('roadmap', { title: 'roadmap' });
}

exports.handleSearch = (req, res) => {
    let { searchTerm } = req.body;
    let d = mockData.filter(data => {
        return (data.heading.toLowerCase().includes(searchTerm.toLowerCase()));
    })
    res.render('dashboard', { title: 'dashboard', mockData: d });
}

exports.getCourse = (req, res) => {
 res.render('course', {courseData});
}