var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");

router.route("/tournament/squad/:id")
  .get(function(req, res) {
    let id = req.params.id;
      TournamentSquad.findOne({_id:id},function(err,squad){
          if(err){
            console.log(err);
          }else{
            res.render("squad",{gameName:squad.gameName,
                              gameDate:squad.gameDate,
                              gameEntry:squad.gameEntry,
                              gameWin:squad.winningAmount,
                              maxPlayer:squad.maxPlayers})
          }
      });
  })
module.exports = router;
