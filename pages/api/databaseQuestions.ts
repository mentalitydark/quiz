import AnswerModel from './../../model/answer';
import QuestionModel from './../../model/question';

const questions: QuestionModel[] = [
    new QuestionModel(303, 'Qual bicho transmite a doença de Chagas?', [
        AnswerModel.wrongQuestion('Abelha'),
        AnswerModel.wrongQuestion('Barata'),
        AnswerModel.wrongQuestion('Pulga'),
        AnswerModel.correctQuestion('Barbeiro')
    ]),
    new QuestionModel(404, 'Qual fruto é conhecido no norte e nordeste como "jerimum"?', [
        AnswerModel.wrongQuestion('Caju'),
        AnswerModel.wrongQuestion('Coco'),
        AnswerModel.wrongQuestion('Chuchu'),
        AnswerModel.correctQuestion('Abóbora')
    ]),
    new QuestionModel(505, 'Qual é o coletivo de cães?', [
        AnswerModel.wrongQuestion('Manada'),
        AnswerModel.wrongQuestion('Alcateia'),
        AnswerModel.wrongQuestion('Rebanho'),
        AnswerModel.correctQuestion('Matilha')
    ]),
    new QuestionModel(202, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswerModel.wrongQuestion('Equilátero'),
        AnswerModel.wrongQuestion('Isósceles'),
        AnswerModel.wrongQuestion('Trapézio'),
        AnswerModel.correctQuestion('Escaleno')
    ]),
];

export default questions