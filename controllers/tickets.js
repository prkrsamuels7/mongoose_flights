const Ticket = require('../models/ticket');
const Movie = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  delete: deleteTicket,
};

function deleteTicket(req, res) {
  Ticket.findById(req.params.id, function(err, ticket) {
    Ticket.findByIdAndDelete(req.params.id, function(err) {
      if(err) console.log(err);
      res.redirect(`/flights/${ticket.flight._id}`);
    })
  });
};

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function(err, ticket) {
    res.redirect(`/flights/${req.params.id}`);
  });
};

function newTicket(req, res) {
  let flightId = req.params.id;
  res.render('tickets/new', { flightId });
};


