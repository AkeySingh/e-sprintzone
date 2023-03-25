const TodoList = require('../modal/TodoLsit')

const getTodoList = async (req, res) => {
  let list
  try {
    list = await TodoList.find({})
    res.send(list)
  } catch (error) {
    res.send(error.message)
  }

  return list
}

const postTodoList = async (req, res) => {
  console.log('ddddddddddddd')
  let list = new TodoList({
    title: req.body.title,
    discription: req.body.discription,
  })

  try {
    const SaveListItem = await list.save()
    res.send(SaveListItem)
  } catch (err) {
    res.send(err)
    console.log(err)
  }
}

module.exports = {
  getTodoList,
  postTodoList,
}
