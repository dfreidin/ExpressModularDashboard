const mongoose = require("mongoose");
require("../models/bear")
var Bear = mongoose.model("Bear");
module.exports = {
    index: function(req, res) {
        Bear.find({}, function(err, bears){
            res.render("index", {bears: bears});
        })
    },
    new: function(req, res) {
        res.render("new")
    },
    show: function(req, res) {
        Bear.findOne({_id: req.params.id}, function(err, bear){
            res.render("show", {bear: bear});
        });
    },
    edit: function(req, res) {
        Bear.findOne({_id: req.params.id}, function(err, bear){
            res.render("edit", {bear: bear});
        });
    },
    create: function(req, res) {
        var bear = new Bear();
        bear.name = req.body.name;
        bear.save(function(err){
            if(err) {
                res.redirect("/bears/new");
            }
            else {
                res.redirect("/bears/" + bear._id);
            }
        });
    },
    update: function(req, res){
        Bear.findOne({_id: req.params.id}, function(err, bear){
            bear.name = req.body.name;
            bear.save(function(err){
                if(err) {
                    res.redirect("/bears/edit/" + bear._id);
                }
                else {
                    res.redirect("/bears/" + bear._id);
                }
            });
        });
    },
    destroy: function(req, res){
        Bear.remove({_id: req.params.id}, function(err){
            res.redirect("/");
        });
    }
}