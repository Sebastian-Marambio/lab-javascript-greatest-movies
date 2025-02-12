// The `movies` array from the file `src/data.js`.
// const movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9
//   }]
// const movies = require('./data.js') 
// console.log('movies: ', movies);



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(array) {
  const allDirectors = array.map(function(eachMovie) {
    return eachMovie.director
  })
  return allDirectors
}

// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredMovies = movies.filter(
    filtered => filtered.director === 'Steven Spielberg' && filtered.genre.includes('Drama')
    )
  return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {return 0}
  const allScores = array.map(el => el.score)
  let total = 0
  for (i=0;i<allScores.length;i+=1) {if (typeof allScores[i]!=='number') {total+=0} else total+=allScores[i]}
  const avgScore = total/(allScores.length)
  return Number(avgScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const filteredMovies = movies.filter(filtered => filtered.genre.includes('Drama'))
  return scoresAverage(filteredMovies)
    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesArr = JSON.parse(JSON.stringify(movies));
  const sortable = moviesArr.sort((a, b) => a.year - b.year)
  return sortable
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesAlph =[...movies]
  //let moviesAlph = JSON.parse(JSON.stringify(movies));
  moviesAlph.sort(function (a, b) {
    if (a.title < b.title) return -1; //  1 here (instead of -1 for ASC)
    if (a.title > b.title) return 1; // -1 here (instead of  1 for ASC)
    if (a.title === 0) return 0;
  });
  //console.log(moviesAlph)

  const firstTwenty=moviesAlph.map(el => el.title)
  firstTwenty.splice(20, (firstTwenty.length) - 20)
  //console.log(firstTwenty)
  return firstTwenty
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let toMinutesConvArr = JSON.parse(JSON.stringify(movies));
  // console.log(toMinutesConvArr[0].duration)
  // console.log(toMinutesConvArr.length)
  for (i=0;i<toMinutesConvArr.length;i+=1) {
    const oldFormat = (toMinutesConvArr[i].duration).toString()
    let string = oldFormat.replace(/[^0-9]/g, "")
    let hours = Number(string[0])
    let minutes = 0
    if (string.length > 1) 
      {minutes = Number(string[1]+string[2])}
    toMinutesConvArr[i].duration = Number((hours * 60) + minutes)
  }
  return toMinutesConvArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
