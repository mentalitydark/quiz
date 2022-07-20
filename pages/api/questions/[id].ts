import questions from './../databaseQuestions'

export default function handler(req, res) {
  const id = +req.query.id

  const question = questions.filter(question => question.id === id)[0];

  if(question)
    res.status(200).json(question.shuffleAnswers().toObject());
  else
    res.status(204).send();
}
