const mongoose = require('mongoose')

const movieBriefSchema = mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  movieLanguage: {
    type: String,
    required: false
  },
  movieCategory: {
    type: String,
    required: false
  },
  movieRelease: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Movies", movieBriefSchema)