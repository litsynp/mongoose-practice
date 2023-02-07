import { Todo } from './todo/todo.model'

interface TodoView {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

export function buildTodoView({
  _id,
  title,
  description,
  completed,
  createdAt,
  updatedAt,
}: Todo): TodoView {
  return {
    id: _id.toString(),
    title,
    description,
    completed,
    createdAt,
    updatedAt,
  }
}
