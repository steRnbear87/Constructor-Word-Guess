var Letter = function (ltr) {
    this.letter = ltr;

    this.appear = false;
    this.displayLetter = function () {
        if (this.appear) {
            return this.letter;
        }

        return "_";
    }
}

module.exports = Letter;