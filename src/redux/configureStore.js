// This is CommonJS for dynamical build time imports

if (process.env.NODE_ENV == "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
