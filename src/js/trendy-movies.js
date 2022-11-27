const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "bd0cfc59cf8f9a55ddbec338ab5bde28"

const categories = {
    trending: '/trending/movie/week',
    querySearch: '/search/movie',
    genre: '/genre/movie/list',
    basic: '&language=en-US&page=1&include_adult=false',
};

export async function fetchTrendyMovies(page) {
    const response = await fetch(
        `${BASE_URL}${categories.trending}?api_key=${API_KEY}${categories.basic}&page=${page}`,
    );
    const results = await response.json();
    console.log(results)
    return results;
}

export async function fetchGenres() {
    const response = await fetch(`${BASE_URL}${categories.genre}?api_key=${API_KEY}&language=en-US`);
    const genres = await response.json();
    return genres;
}