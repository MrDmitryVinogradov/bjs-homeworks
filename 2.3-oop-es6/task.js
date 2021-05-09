class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    fix() {
        return this.state = 1.5 * this.state;
    }

    set state(arg) {
        if (arg > 100) {
            this._state = 100;
        }

        if (arg < 0) {
            this._state = 0;
        }

        if (arg <= 100 && arg >= 0) {
            this._state = arg;
        }
    }

    get state() {

        return this._state;

    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'book';
        this.author = author;
    }
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let checkedObject = this.books[i];
            for (let prop in checkedObject) {
                if (prop === type && checkedObject[prop] === value) {
                    return checkedObject
                }
            }
        }
        return null
    }
    
    giveBookByName(bookName) {
        let result = null;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                result = this.books[i];
                this.books.splice(i, 1);
                return result
            }
        }
        return result
    }
}

