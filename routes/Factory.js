const express = require("express");
//Import Factory user model (Inside models file)
const Factory = require("../models/factory");

//invoke function in express -- express.Router
const router = express.Router();

//Create & save Factory
router.post("/factory/create", (req, res) => {
  let newFactory = new Factory(req.body);

  newFactory.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Raw Materials send successfully.",
    });
  });
});

//get a factory
router.get("/factory", (req, res) => {
  Factory.find().exec((err, factory) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingFactory: factory,
    });
  });
});

//get(retrieve) a specific post
router.get("/factory/:id", (req, res) => {
  let factoryId = req.params.id;

  Factory.findById(factoryId, (err, factory) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      factory,
    });
  });
});

//update posts
router.put("/factory/update/:id", (req, res) => {
  Factory.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, factory) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Raw Materials Updated Successfully",
      });
    }
  );
});

//delete post
router.delete("/factory/delete/:id", (req, res) => {
  Factory.findByIdAndRemove(req.params.id).exec((err, deleteFactory) => {
    if (err)
      return res.status(400).json({
        message: "Raw Material unsuccessful",
        err,
      });

    return res.json({
      message: "Delete Factory Succesfullly",
      deleteFactory,
    });
  });
});

module.exports = router;
