const user = {
  id: 123,
  groupId: 123
}

const question = {
  id: 456,
  set: 1,
  type: 'slider', // ('slider' || 'text' || 'radiobutton' || 'checkbox')
  title: 'A nice title',
  subtitle: 'A more descripte text about the question',
}

const createQuestion = (index) => {
  return {
    id: index,
    set: 1,
    type: 'slider',
    title: 'A nice title',
    subtitle: 'A more descripte text about the question',
  }
}

export const generateQuestions = (value = 10) => {
  let array = []
  for (let i = 0; i < value; i++) {
    array.push(createQuestion(i))
  }
  return array
}
