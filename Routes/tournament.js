var express = require('express');
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");

var router = express.Router();
const app = express();



router.route("/tournament")
  .get(function(req, res) {
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


                res.render("tournament", {
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

  module.exports = router;
