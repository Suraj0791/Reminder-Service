const CrudRepository=require('./crud-repository');
const{PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();
const Ticket=prisma.ticket;



class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket); 
    }

    async getPendingTickets() {
        const response = await Ticket.findMany({
            where: {
                status: 'PENDING'
            }
        });
        return response;
    }
}

module.exports = TicketRepository;