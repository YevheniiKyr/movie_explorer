export function mapGenres(
    genreIds,
    genres
) {
    const genresMap = {};
    genres.forEach((genre) => {
        genresMap[genre.id] = genre.name;
    });

    return genreIds.map(genreId =>
        genresMap[genreId]).join(", ")

}
