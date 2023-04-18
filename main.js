//// Load API TMDB
/// Yolanda Lopez
///////////////////////////////////////////////////

//Constantes
const API_KEY = "api_key=710707e88a694c3cdaa328eeb8a0f744";
const MAIN_URL = "https://api.themoviedb.org/3";
const API_URL = MAIN_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

////////////////////////////////////////

//DOM Events

const main = document.querySelector("#main-container");

////////////////////////////////////////////////

async function getMovies(url) {
  try {
    const res = await axios.get(url);
    const movies = res.data.results;
    console.log(movies);
    showMovies(movies);
  } catch (e) {
    console.error(e);
  }
}

getMovies(API_URL);

function showMovies(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    console.log(movie);
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("card");
    movieEl.innerHTML = `<img
    src="${IMAGE_URL + poster_path}"
    alt="${title}"
    class="card-img-top"
  />
  <div class="card-body">
    <div class="movie-info">
      <h3 class="card-title">${title}</h3>
      <span class="green">${vote_average}</span>
    </div>
    <div class="overview card-text">
      <h5>Resumen</h5>
      ${overview}
    </div>
  </div>`;
    main.appendChild(movieEl);
  });
}
