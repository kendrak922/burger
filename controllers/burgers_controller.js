const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res){
    burger.selectAll(function(data){
        const burgerObject = {
            burgers : data
        };
    console.log(burgerObject);
    res.render("index", burgerObject)
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne([ "burgerName"],
[req.body.burger_name], function(result){
    res.json({id: result.insertID})
});
});

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        burgerName : req.body.burger_name
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

// router.delete("/api/burgers/:id", function(req, res){
//     const condition = "id = " + req.params.id;
//     burger.delete(condition, function(result) {
//         if(result.affectedRows == 0){
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;