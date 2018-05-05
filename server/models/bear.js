const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bears_dashboard");
var BearSchema = new mongoose.Schema({
    name: {type: String, required: true}
});
mongoose.model("Bear", BearSchema);