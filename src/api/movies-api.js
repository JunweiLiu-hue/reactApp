export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=186c201c0a069c1aa61a04bf86bb27a5&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };