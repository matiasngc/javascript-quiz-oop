export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'
            choicesContainer.append(button)

            button.addEventListener('click', () => callback(choices[i]))
        }
    }

    /**
     * 
     * @param {number} score the total score
     */
    showScores(score) {
        const yourScore = `
            <h1>Result</h1>
            <h2>Your Score: ${score}</h2>
        `
        const divQuiz = document.getElementById('quiz')
        divQuiz.innerHTML = yourScore
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total the total questions
     */
    showProgress(currentIndex, total) {
        const yourProgress = document.getElementById('progress')
        yourProgress.innerHTML = `Question ${currentIndex} of ${total}`
    }
}