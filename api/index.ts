export async function fetchSearchedFilms(filmName: string): Promise<IFilmsSearchData> {
  const response = await fetch(
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${filmName}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "80636cd22amsh69381db90163ebep1ba62bjsnd02aa3ae19ae",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      },
    },
  );
  return await response.json();
}

export async function fetchFilmData(filmID: string): Promise<IFilmData> {
  const response = await fetch(
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${filmID}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "80636cd22amsh69381db90163ebep1ba62bjsnd02aa3ae19ae",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      },
    },
  );
  return await response.json();
}
