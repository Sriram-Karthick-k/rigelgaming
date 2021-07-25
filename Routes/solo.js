var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");

router.route("/tournament/solo/:id")
.get(function(req, res) {
    let id = req.params.id;
      TournamentSolo.findOne({_id:id},function(err,solo){
          if(err){
            console.log(err);
          }else{
            res.render("solo",{gameName:solo.gameName,
                              gameDate:solo.gameDate,
                              gameEntry:solo.gameEntry,
                              gameWin:solo.winningAmount,
                              maxPlayer:solo.maxPlayers,
                            gameRules:solo.gameRules})
          }
      });

  })
module.exports = router;
