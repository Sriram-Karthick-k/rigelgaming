var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");
router.route("/ruleadd")
  .post(function(req, res) {
    const frule = req.body.ruleFront;
    var gameId = req.body.gameId;
    TournamentSolo.findByIdAndUpdate({
      _id: gameId
    }, {
      $push: {
        gameRules: {
          rule:frule
        }
      }
    },function(err,solo){
      if(err){
        console.log(err);
      }else{
        res.render("/update",
          {    gameName: solo.gameName,
              gameType: "Solo",
              gameDate: solo.gameDate,
              gameTime: solo.gameTime,
              maxPlayers: solo.maxPlayers,
              gameEntry: solo.gameEntry,
              winningAmount: solo.winningAmount,
              gameRules: solo.gameRules,
              gameId: solo._id
            })
      }
    })

  })
module.exports = router;
