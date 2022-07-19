export default class AnswerModel {
    #value: string;
    #correct: boolean;
    #revealed: boolean;

    constructor(value: string, correct: boolean, revealed = false) {
        this.#value = value;
        this.#correct = correct;
        this.#revealed = revealed;
    }

    static correctQuestion(value: string) {
        return new AnswerModel(value, true);
    }

    static wrongQuestion(value: string) {
        return new AnswerModel(value, false);
    }

    get value() {
        return this.#value;
    }

    get correct() {
        return this.#correct;
    }
    
    get revealed() {
        return this.#revealed;
    }

    show() {
        return new AnswerModel(this.#value, this.#correct, true);
    }

    toObject() {
        return {
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed,
        }
    }

    static fromObject(obj: AnswerModel): AnswerModel {
        return new AnswerModel(obj.value, obj.correct, obj.revealed);
    }
}