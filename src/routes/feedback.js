const { sendFeedback } = require("../controllers/long_in");
module.exports = (app) => { 
    app.post("/api/long_in", sendFeedback);
} 