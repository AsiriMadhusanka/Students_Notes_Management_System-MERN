const nodemailer = require('nodemailer');
const {google} = require("googleapis");
const clientId = "554839339621-95g7jcronoqtv22lsgnpnhkk41hvo3g3.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUri = "https://developers.google.com/oauthplayground";
const refreshToken = "1//040VrtLvEz4I7CgYIARAAGAQSNwF-L9Ird97KkTDZGTghBXvPwE1ZE9Q2xTwun5YKocXy1hG7jWfnCJTU8OC9u96FbIWpqujNAXs";

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
oAuth2Client.setCredentials({refresh_token: refreshToken});
async function main(){
       const accessToken = await oAuth2Client.getAccessToken(); 

       transporter = nodemailer.createTransport({
           service: "gmail",
           auth: {
             type: "OAuth2",
             clientId,
             clientSecret, 
             refreshToken,
             accessToken,
             user: "universalacomputerssspm@gmail.com"
        },
      });
} 
main();

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: "universalacomputerssspm@gmail.com", // generated ethereal user
//         pass: "vngktubqdcjpcedc"   // generated ethereal password
//     }
// });


let sendEmail = (emailTemplate) => {
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ', info.response)
        }
    });
}

module.exports = {sendEmail};