const twilio = require("twilio")

exports.sendText = async (req, res, next) => {

    try {

        console.log(req.body)

        const { phoneNumber } = req.body
        const accountSid = process.env.Account_SID
        const accountAuth = process.env.Auth_Token
        const client = new twilio(accountSid,accountAuth)
    
        // client.messages.create({
        //     body: "EMERGENCY WARNING",
        //     to: phoneNumber,
        //     from: "+18668053306"
        // })
        
        return res.json("Successfully Sent Message");
            
    } catch (error) {
        return res.json("Error In Sending Message");
    }
}
