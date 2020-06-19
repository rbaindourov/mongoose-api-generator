// Imports
const express = require("express");
const bodyParser = require("body-parser");
const models = require("./db");
const crud = require("./crud");

// Initial Config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Autogenerate CRUD endpoints for each model schema
models.forEach((model) => {
  app.use(`/api/${model.collection.collectionName}`, crud(model));
});

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));