const nodeMailer = require('nodeMailer')
const mailConfig = require('../../config/mail')

const transport = nodeMailer.createTransport(mailConfig)

module.exports = transport
