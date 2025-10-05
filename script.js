function Movie(title, director, year, rating) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;

}

Movie.prototype.overview = function () {
    return `Title ${this.title}, ${this.year}, directed by ${this.director} -- ${this.rating} / 10 `;

}

const movie1 = new Movie("The Godfather", "Francis Ford Coppola", 1972, 9.2);
const movie2 = new Movie("Fight Club", "David Fincher", 1999, 8.8);
const movie3 = new Movie("The Dark Knight", "Christopher Nolan", 2008, 9.0);
const movie4 = new Movie("Parasite", "Bong Joon-ho", 2019, 8.6);
const movie5 = new Movie("Oppenheimer", "Christopher Nolan", 2023, 8.3);

const movies = [movie1, movie2, movie3, movie4, movie5]

// console.log(movie1.overview());
// console.log(movie2.overview());
// console.log(movie3.overview());
// console.log(movie4.overview());

function isClassic() {
    for (let movie in movies) {
        if (movie.year <= 2000) {
            console.log(`This ${title} movie is a classic movie`);
        }
        else {
            console.log(`this movie is not a classic movie`);
        }
    }
}

isClassic();

