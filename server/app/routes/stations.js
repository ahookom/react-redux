'use strict';

const express = require('express');
const router = express.Router();
const mime = require('mime');
const chalk = require('chalk');
const urlParse = require('url').parse;
const models = require('../../db/models');
const Song = models.Song;
const Station = models.Genre;
const request = require('request');
const musicMetadata = require('musicmetadata')
const fs = require('fs')

module.exports = router;

// app.use('/',function(req,res,next){
//   let allSongs;
//   Song.findAll()
//   .then(songsArr=>{
//     allSongs=songsArr;
//     songsArr.forEach(song=>{
//       Genre.findOrCreate({})
//         }
//       })
//     })
//   })
//   .catch(next)
// })
