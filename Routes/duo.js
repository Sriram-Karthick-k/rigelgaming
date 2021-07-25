var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");

router.route("/tournament/duo/:id")
  .get(function(req, res) {
    let id = req.params.id;
      TournamentDuo.findOne({_id:id},function(err,duo){
          if(err){
            console.log(err);
          }else{
            res.render("duo",{gameName:duo.gameName,
                              gameDate:duo.gameDate,
                              gameEntry:duo.gameEntry,
                              gameWin:duo.winningAmount,
                              maxPlayer:duo.maxPlayers
                              })
          }
      });
  })
module.exports = router;
