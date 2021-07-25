var express = require('express');
var router = express.Router();
const mongoose = require('./dataBaseMain');
const TournamentSolo = require("./dataBaseTournamentSolo");
const TournamentDuo = require("./dataBaseTournamentDuo");
const TournamentSquad = require("./dataBaseTournamentSquad");
router.route("/update")
  .get(function(req,res){
    res.render("update",{
      gameName: "",
      gameType:  "",
      gameDate:  "",
      gameTime:  "",
      maxPlayers: "",
      gameEntry:  "",
      winningAmount:  "",
      gameRules:  "",
      gameId: ""
    })
  })


module.exports = router;
