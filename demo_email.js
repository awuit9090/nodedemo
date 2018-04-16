var nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) =>{
var transporter = nodemailer.createTransport({
//  service: 'gmail',
//    auth: {
//      user: 'youremail@gmail.com',
//	pass: 'yourpassword'
//  }
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'pvlrh377zzkk72x5@ethereal.email', 
    pass: '98qBK4Ucb7zDtQbcR1'
  }
});

	      var mailOptions = {
	        from: 'youremail@gmail.com',
		  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
		    subject: 'Sending Email using Node.js',
//		      text: 'That was easy!'
                    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

		      transporter.sendMail(mailOptions, function(error, info){
		        if (error) {
			    console.log(error);
			      } else {
			          console.log('Email sent: ' + info.response);
				  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
				    }
				    });
});
