const mongoose = require('./dataBaseMain');
var express = require('express');
var router = express.Router();

var Schema = mongoose.Schema;
var tournamentsquadSchema = new Schema({
  gameName: String,
  gameDate: String,
  gameTime: String,
  maxPlayers: Number,
  gameEntry: Number,
  winningAmount: Number,
  gameRules:[{rule:String}],
  teamJoined: []
})
var TournamentSquad = mongoose.model('TournamentSquad', tournamentsquadSchema);
module.exports = exports=TournamentSquad;
