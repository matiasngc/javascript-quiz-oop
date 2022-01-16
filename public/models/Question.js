export class Question {

    /**
     * 
     * @param {string} pregunta this is the question
     * @param {string[]} choices this are the choices of the question
     * @param {string} answer this is the answer of the question
     */

    constructor(pregunta, choices, answer) {
        this.pregunta = pregunta
        this.choices = choices
        this.answer = answer
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if the answer is correct
     */

    correctAnswer(choice) {
        return choice === this.answer
    }

}
