// const client = require("@mailchimp/mailchimp_marketing");

// client.setConfig({
//     apiKey: "fd4e30ed85cc577cf6f16fce32bdceb6-us9",
//     server: "us9",
// });

// const run = async () => {
//     const response = await client.campaigns.list();
//     console.log(response);
// };

// run();



const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/submit', (req, res) => {
    const {
        name,
        email,
        contactNumber,
        message
    } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'anab@amprotocolabs.com',
            pass: 'Defcon00&',
        },
    });

      const mailOptions = {
        from: {email},
        to: 'anab@amprotocolabs.com', // Your email address or the recipient's email
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`,
    };

    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect('/thank-you.html'); // Redirect to a thank-you page
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log(mailOptions);
});











// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const client = require("@mailchimp/mailchimp_marketing"); // Import Mailchimp client
// const cors = require('cors');

// // Initialize the Mailchimp client with your API key
// client.setConfig({
//     apiKey: "fd4e30ed85cc577cf6f16fce32bdceb6-us9",
//     server: "us9",
// });

// const app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.post('/test', async (req, res) => {
//     const {
//         name,
//         email,
//         contactNumber,
//         message
//     } = req.body;

//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'shizzyjawed@gmail.com',
//             pass: 'Shizzyisfake',
//         },
//     });

//     const mailOptions = {
//         from: email, // Use the user's email as the "from" address
//         to: 'anab@amprotocolabs.com', // Your email address or the recipient's email
//         subject: 'Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`,
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });

//     // Subscribe user to a Mailchimp list (example)
//     try {
//         const response = await client.lists.addListMember("308995c375", {
//             email_address: email,
//             status: "subscribed",
//             merge_fields: {
//                 FNAME: name,
//             },
//         });
//         console.log('User subscribed to Mailchimp list:', response);
//     } catch (error) {
//         console.error('Error subscribing user to Mailchimp list:', error);
//     }

//     //res.json({success: true});
//     res.json({ message: 'Test endpoint reached successfully' });
// });
// app.use(cors());
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
