const bears = require("../controllers/bears");
module.exports = function(app) {
    app.get("/", bears.index);
    app.get("/bears/new", bears.new);
    app.get("/bears/:id", bears.show);
    app.get("/bears/edit/:id", bears.edit);
    app.post("/bears", bears.create);
    app.post("/bears/:id", bears.update);
    app.get("/bears/destroy/:id", bears.destroy);
}