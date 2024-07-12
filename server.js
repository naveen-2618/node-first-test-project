const express = require("express");
const connectDB = require("./config/db");
const Movies = require("./models/movie-schema")

connectDB();

// Declare App
const myApp = express()
myApp.use(express.json())

// Server Setting
myApp.listen(4500, console.log("Server connected to 4500"));

// Display Out put as HTML
/* myApp.get("/", (req, res) => {
  res.send("My First Testing Project");
}) */

// Getting output in jSon format
myApp.get("/", (req, res) => {
  res.json({msg: "This is sample json output"})
})

//Display All Movies
//   =>  Default Format  <=   //
/* myApp.get("/movies/", (req, res) => {
  res.json({msg: "Display All Movies"})
}) */
//   => Using DataBase  <=   //
myApp.get("/movies/", async(req, res) => {
  try {
    const listMovie = await Movies.find({})
    res.json({listMovie});
  } catch (error) {
    console.log(error);
  }
})

// Display Movie by ID
//   =>  Default Format  <=   //
/* myApp.get("/movies/:movieID", (req, res) => {
  res.json({msg: "Display Movie of ID " + req.params.movieID})
}) */
//   => Using DataBase  <=   //
myApp.get("/movies/:movieID", async(req, res) => {
  try {
    const singleMovie = await Movies.findById(req.params.movieID)
    res.json({msg: `Displaying ${singleMovie.movieName} Movie`})
  } catch (error) {
    console.log(error);
  }
})

// CREATE Movie
//   =>  Default Format  <=   //
/* myApp.post("/movies", (req, res) => {
  res.json({msg: "Creating a Movie"})
}) */
//   => Using DataBase  <=   //
myApp.post("/movies/", async(req, res) => {
  try {
    await Movies.create({
      movieName: req.body.movieName,
      movieLanguage: req.body.movieLanguage,
      movieCategory: req.body.movieCategory,
      movieRelease: req.body.movieRelease
    })
    res.json({msg: "Movies Created"})
  } catch (error) {
    console.log(error);
  }
})

// EDIT a Movie
//   =>  Default Format  <=   //
/* myApp.put("/movies/:movieID", (req, res) => {
  res.json({msg: "Edit the Movie " + req.params.movieID})
}) */
//   => Using DataBase  <=   //
myApp.put("/movies/:movieID", async(req, res) => {
  try {
    const updateMovie = await Movies.findByIdAndUpdate(req.params.movieID, {
      movieName: req.body.movieName,
      movieLanguage: req.body.movieLanguage,
      movieCategory: req.body.movieCategory,
      movieRelease: req.body.movieRelease
    }, {new: true}) // Add { new: true } to return the updated document
    if(!updateMovie) {
      return res.status(404).json({msg: "Movie not found"})
    }
    res.json({msg: `${updateMovie.movieName} is Updated`})
  } catch (error) {
    console.log(error);
  }
})

// DELETE a Movie
//   =>  Default Format  <=   //
/* myApp.delete("/movies/:movieID", (req, res) => {
  res.json({msg: "Deleting the Movie" + req.params.movieID})
}) */
//   => Using DataBase  <=   //
myApp.delete("/movies/:movieID", async(req, res) => {
  try {
    const removeMovie = await Movies.findByIdAndDelete(req.params.movieID)
    res.json({msg: `${removeMovie.movieName} is Deleted`})
  } catch (error) {
    console.log(error);
  }
})