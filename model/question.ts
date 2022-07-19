import { shuffle } from '../functions/array';
import AnswerModel from './answer'

export default class QuestionModel {
    #id: number;
    #description: string;
    #answers: AnswerModel[];
    #correct: boolean;

    constructor(id: number, description: string, answers: AnswerModel[], correct = false) {
        this.#id = id;
        this.#description = description;
        this.#answers = answers;
        this.#correct = correct;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return this.#description;
    }

    get answers() {
        return this.#answers;
    }

    get correct() {
        return this.#correct;
    }

    get answered() {
        for(const answer of this.#answers)
            if(answer.revealed)
                return true;

        return false;
    }

    get notAnswered() {
        return !this.answered
    }

    replayWith(index: number): QuestionModel {
        const correct = this.#answers[index]?.correct;
        const answers = this.#answers.map( (answer, i) => {
            const answerSelected = index === i
            return answerSelected || answer.correct ? answer.show() : answer
        });
        
        return new QuestionModel(this.#id, this.#description, answers, correct);
    }

    shuffleAnswers(): QuestionModel {
        const shuffledAnswers = shuffle(this.#answers);
        return new QuestionModel(this.#id, this.#description, shuffledAnswers, this.#correct);
    }

    toObject() {
        return {
            id: this.#id,
            description: this.#description,
            answered: this.answered,
            correct: this.#correct,
            answers: this.answers.map( answer => answer.toObject()),
        }
    }

    static fromObject(obj: QuestionModel): QuestionModel {
        const answers = obj.answers.map(resp => AnswerModel.fromObject(resp))
        return new QuestionModel(obj.id, obj.description, answers, obj.correct)
    }
}