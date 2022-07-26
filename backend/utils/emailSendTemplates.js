let sendlink = (email) => {
    const emailSendTemplates = {
        from: "noreply@gmail.com",
        to: email,
        subject: "email verification for " + email,
        text:
            "Register Link: " + 
            "http://localhost:3000/customers/" + 
            "FirstLog/" ,
    };
    return emailSendTemplates;
}

module.exports = { sendlink };