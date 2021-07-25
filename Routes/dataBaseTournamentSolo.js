const mongoose = require('./dataBaseMain');
var express = require('express');
var router = express.Router();

var Schema = mongoose.Schema;

var tournamentsoloSchema = new Schema({
  gameName: String,
  gameDate: String,
  gameTime: String,
  maxPlayers: Number,
  gameEntry: Number,
  winningAmount: Number,
  gameRules:[{rule:String}],
  playersJoined: []
});
var TournamentSolo = mongoose.model('TournamentSolo', tournamentsoloSchema);
module.exports = exports=TournamentSolo;
