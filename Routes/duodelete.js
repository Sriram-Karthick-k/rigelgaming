var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");

router.post("/duodelete", function(req, res) {
  var delPassword = req.body.delPass;
  var orginalDelPassword = "1";
  var duoId = req.body.duoDel;

  if (delPassword === orginalDelPassword) {
    TournamentDuo.findByIdAndRemove(duoId, function(err) {
      if (err) {
        console.log(err);
      } else {
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
      }
    });
  } else {
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
  }

})
module.exports = router;
