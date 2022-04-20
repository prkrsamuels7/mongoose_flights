require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');
const Ticket = require('./models/ticket');

let tickets;

Ticket.find({}, (err, ticketDocs) => {
  tickets = ticketDocs;
})