var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('SMTP',{
	  service: "Hotmail",
    auth: {
        user: "davidthanphilom@msn.com",
        pass: "lornadamo206"
    }
});

module.exports = function(req, reply){
	var mailOptions = req.payload;

	console.log(mailOptions.from);

	transporter.sendMail({
		from: mailOptions.from,
		to: mailOptions.to,
		subject: mailOptions.subject,
		text: 'Name: \n' + mailOptions.name + '\n\n' + 'Email: \n' + mailOptions.from + '\n\n' + 'Subject: \n' + mailOptions.subject + '\n\n' + 'Message: \n' + mailOptions.text
	}, function(err,response){
		if(err) {
			console.log(err);
		} else {
			console.log(response);
		}
	});

	reply.redirect('/success');
};