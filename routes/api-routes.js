// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {

  // GET route
  app.get("/api", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function (burgerDB) {
      // We have access to the todos as an argument inside of the callback function
      res.json(burgerDB);
    });

  });

  // POST route
  app.post("/api/burgers", function (req, res) {
    //adds a burger to the burger api
    db.burgers.create({
      type: req.body.type,
      eaten: req.body.eaten
    }).then(function (DBburgers) {
      res.json(DBburgers);
    })

  });

  // PUT route
  app.put("/api/burgers/id", function (req, res) {
    //updates burgers eaten value
    db.burgers.update({
      eaten: true
    }, {
        where: {
          id: req.body.burgID
        }
      })
      .then(function (burgerDB) {
        res.json(burgerDB);
      });

  });
};

