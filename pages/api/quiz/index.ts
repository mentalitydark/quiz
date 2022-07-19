import questions from '../databaseQuestions';
import { shuffle } from '../../../functions/array';

export default function Quiz(req, res) {
    const ids = questions.map( ({ id }) => id)

    res.status(200).json(shuffle(ids));
}