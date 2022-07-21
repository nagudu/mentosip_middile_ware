const { mentorship, getMentorship, viewMentorship } = require("../controllers/mentorship");
module.exports = (app) => { 
    app.post("/api/mentorship", mentorship);
    app.get('/mentor',getMentorship)
    app.get('/view',viewMentorship)
} 