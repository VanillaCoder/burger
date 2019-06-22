// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route
  app.get("/api", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(burgerDB) {
      // We have access to the todos as an argument inside of the callback function
      res.json(burgerDB);
    });

  });

  // POST route
  app.post("/api/burgers", function(req, res) {
//adds a burger to the burger api
  db.burgers.create({
    type: req.body.type,
    eaten: req.body.eaten
  }).then(function(DBburgers) {
    res.json(DBburgers);
  })

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTodo) {
        res.json(dbTodo);
      });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the todos we want to update
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbTodo) {
        res.json(dbTodo);
      });

  });
};
