const API_TOKEN = "b4a51fe9fad6acd7c395c55ed4a1372a"

export function getFilmsFromApiWithSearchedText(text,page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query='+ text + '&page=' + page
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300'+ name
}