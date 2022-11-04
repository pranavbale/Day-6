// creating the Movie class
class Movie {
    // creating the constructor
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getTitle() {
        return this.title;
    }

    getStudio() {
        return this.studio;
    }

    getRating() {
        return this.rating;
    }

    setTitle(title) {
        this.title = title;
    }

    setStudio(studio) {
        this.studio = studio;
    }

    setRating(rating) {
        this.rating = rating;
    }

    getPG(movies) {
        let n = movies.lenght;
        let PGMovies = []
        for (let j = 0; j < movies.lenght; j++) {
            let mov = movies.getPG().split('');
            if (mov.lenght === 2) {
                let isPG = mov[0] + mov[1];
                if (isPG === 'PG') {
                    PGMovies.push(movies[j]);
                }
            }
        }
        return PGMovies;
    }
}

let casinoRoyal = new Movie('Casino Royale', 'Eon Productions', 'PG13');
console.log(casinoRoyal);