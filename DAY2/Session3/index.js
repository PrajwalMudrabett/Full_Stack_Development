let defaultval="avenger"
function findMovie(){
    let searchMovie=document.getElementById("searchhere")
    let searchVal=searchMovie.value;
    defaultval=searchVal;
    console.log(searchVal);
    console.log(defaultval);
}
async function getMovie() {
    let movies = await fetch(`https://www.omdbapi.com/?s=${defaultval}&apikey=9deb3c85`)
    movies = await movies.json();
    let omdMovies = document.getElementById("showmoviedetails")
    movies.Search.map((movie)=>{
        return omdMovies.innerHTML += `
        <div class="moviecard">
            <div><h3>${movie.Title}</h3></div>
            <div class="movieimg"><img src="${movie.Poster}" alt="${movie.Title}"></div>
        </div>
        `
    })
}
