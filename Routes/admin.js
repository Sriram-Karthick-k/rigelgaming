var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");
router.route("/admin")
  .get((req, res) => {

    TournamentSolo.find(function(err, soloBack) {
      if (err) {
        console.log("error");
      } else {
        TournamentDuo.find(function(err, duoBack) {
          if (err) {
            console.log("error");
          } else {
            TournamentSquad.find(function(err, squadBack) {
              if (err) {
                console.log("error");
              } else {

                res.render("admin", {
                  gameSoloFront: soloBack,
                  gameDuoFront: duoBack,
                  gameSquadFront: squadBack
                })
              }
            });
          }
        });
      }
    });

  })
  .post((req, res) => {
    var gameName = req.body.gameName;
    var gameDate = req.body.gameDate;
    var gameTime = req.body.gameTime;
    var gameMaxPlayers = req.body.gameMaxPlayers;
    var gameEntryAmount = req.body.gameEntryAmount;
    var gameWinningAmount = req.body.gameWinningAmount;
    var adminPassword = req.body.adminPassword;
    var gameRule=req.body.gameRules;
    var gameType = req.body.gameType;

    const originalAdminPassword = "1";

    if (adminPassword === originalAdminPassword) {

      if (gameType === "solo") {
        const create = new TournamentSolo({

          gameName: gameName,
          gameDate: gameDate,
          gameTime: gameTime,
          maxPlayers: gameMaxPlayers,
          gameEntry: gameEntryAmount,
          winningAmount: gameWinningAmount,
          gameRules:gameRule,
          playersJoined: []

        });
        create.save()
        res.redirect("/");

      } else if (gameType === "duo") {
        const create = new TournamentDuo({


          gameName: gameName,
          gameDate: gameDate,
          gameTime: gameTime,
          maxPlayers: gameMaxPlayers,
          gameEntry: gameEntryAmount,
          winningAmount: gameWinningAmount,
          gameRules:gameRule,
          teamJoined: []


        });
        create.save()
        res.redirect("/");
      } else if (gameType === "squad") {
        const create = new TournamentSquad({


          gameName: gameName,
          gameDate: gameDate,
          gameTime: gameTime,
          maxPlayers: gameMaxPlayers,
          gameEntry: gameEntryAmount,
          winningAmount: gameWinningAmount,
          gameRules:gameRule,
          teamJoined: []


        });
        create.save()
        res.redirect("/");
      }
    } else {
      res.redirect("/admin");
    }
  })

module.exports = router;
