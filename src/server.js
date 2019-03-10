const express = require("express");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production"; // Development, Production, Testing

    //  Make sure to follow the exact calling order bellow
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //  'teaches' express how to interpret json from 'req.body' for eg.
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

//  exports only the object of interest (aka express) of an instance of 'App'
module.exports = new App().express;
