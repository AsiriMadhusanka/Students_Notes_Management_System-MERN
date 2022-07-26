let sendlink = (email) => {
    const emailSendTemplates = {
        from: "noreply@gmail.com",
        to: email,
        subject: "email verification for " + email,
        text:
            "Your password is 12345 and Register Link: " + 
            `http://localhost:3000/customers/FirstLog/?email=${email}`,

          
    };
    return emailSendTemplates;
}

module.exports = { sendlink };