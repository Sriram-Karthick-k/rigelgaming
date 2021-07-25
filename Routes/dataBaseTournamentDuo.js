const mongoose = require('./dataBaseMain');
var express = require('express');
var router = express.Router();

var Schema = mongoose.Schema;

var tournamentduoSchema = new Schema({
  gameName: String,
  gameDate: String,
  gameTime: String,
  maxPlayers: Number,
  gameEntry: Number,
  winningAmount: Number,
  gameRules:[{rule:String}],
  teamJoined: []
})
var TournamentDuo = mongoose.model('TournamentDuo', tournamentduoSchema);
module.exports = exports=TournamentDuo;
