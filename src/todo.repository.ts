import { Todo, TodoModel } from './todo/todo.model'

async function findTodos(): Promise<Todo[]> {
  return (await TodoModel.find({ deletedAt: { $exists: false } })).map((todo) =>
    todo.toObject(),
  )
}

async function findTodo(id: string): Promise<Todo> {
  const todo = await TodoModel.findOne({
    _id: id,
    deletedAt: { $exists: false },
  })

  if (!todo) {
    throw new Error(`Todo not found with id ${id}`)
  }

  return todo
}

function createTodo({
  title,
  description,
}: {
  title: string
  description: string
}): Promise<Todo> {
  const todo = new TodoModel({
    title,
    description,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  return todo.save()
}

function updateTodo(
  id: string,
  { title, description }: { title: string; description: string },
) {
  return TodoModel.updateOne(
    { _id: id },
    { title, description, updatedAt: new Date() },
  )
}

function completeTodo(id: string) {
  return TodoModel.updateOne(
    { _id: id },
    { completed: true, updatedAt: new Date() },
  )
}

function deleteTodo(id: string) {
  return TodoModel.updateOne({ _id: id }, { deletedAt: new Date() })
}

export const todoRepository = {
  findTodos,
  findTodo,
  createTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
}
