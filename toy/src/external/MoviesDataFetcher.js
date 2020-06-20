import Config from "src/config";

const MoviesDataFetcher = async (searchTerm) => {
  const response = await fetch(Config.moviesApiUrl + searchTerm);
  const result = await response.json();

  if (result.Error) {
    console.error(result.Error);
    return [];
  }

  return result.Search;
};

export default MoviesDataFetcher;
