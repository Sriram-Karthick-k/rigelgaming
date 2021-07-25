var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");
router.route("/befupdate")
  .post((req, res) => {
    var game_name = req.body.updateId;
    var adminPassword = req.body.adminPassword;
    var originalPassword = "1";
    var gameType = String(req.body.gameType);

    if (adminPassword === originalPassword) {
      if (gameType === "solo") {
        TournamentSolo.findOne({
          gameName: game_name
        }, function(err, solo) {
          if (err) {
            console.log(err);
          } else {

            res.render("update", {
              gameName: solo.gameName,
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
        });
      } else if (gameType === "duo") {
        TournamentDuo.findOne({
          gameName: game_name
        }, function(err, duo) {
          if (err) {
            console.log(err);
          } else {
            res.render("update", {
              gameName: duo.gameName,
              gameType: "Duo",
              gameDate: duo.gameDate,
              gameTime: duo.gameTime,
              maxPlayers: duo.maxPlayers,
              gameEntry: duo.gameEntry,
              winningAmount: duo.winningAmount,
              gameRules: duo.gameRules,
              gameId: duo._id
            })
          }
        });
      } else if (gameType === "squad") {
        TournamentSquad.findOne({
          gameName: game_name
        }, function(err, squad) {
          if (err) {
            console.log(err);
          } else {
            res.render("update", {
              gameName: squad.gameName,
              gameType: "Squad",
              gameDate: squad.gameDate,
              gameTime: squad.gameTime,
              maxPlayers: squad.maxPlayers,
              gameEntry: squad.gameEntry,
              winningAmount: squad.winningAmount,
              gameRules: squad.gameRules,
              gameId: squad._id
            })
          }
        });
      }
    }


  })

module.exports = router;
// 5f1aaed676f08308bcf5a1fb
