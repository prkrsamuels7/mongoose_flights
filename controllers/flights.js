const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
};

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key];
  };
 
  Flight.create(req.body, (err) => {
    if(err) return res.render('flights/new');
    res.redirect('/flights');
  });
};

function newFlight(req, res) {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  console.log(departsDate)
  res.render('flights/new', { departsDate });
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    flights.sort((first, second) => first.departs - second.departs);
    res.render('flights/index', { flights });
  });
};

