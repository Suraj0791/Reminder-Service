const{TicketRepository}=require('../repositories');
const ticketRepo= new TicketRepository();
const{Mailer}=require('../config');


async function sendEmail(mailFrom, mailTo, subject, text) {
    try {
        const response = await Mailer.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: text
        });
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails() {
    try {
        const response = await ticketRepo.getPendingTickets();
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}



async function createTicket(data) {
    try {
        const response = await ticketRepo.create(data);
        return response;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports={
    createTicket,
    sendEmail,
    getPendingEmails,
}