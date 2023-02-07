import { Todo } from './todo/todo.model'
import { todoRepository } from './todo.repository'

export function findTodo(
  id: string,
  { findTodo = todoRepository.findTodo } = {},
): Promise<Todo> {
  return findTodo(id)
}

export function findTodos({
  findTodos = todoRepository.findTodos,
} = {}): Promise<Todo[]> {
  return findTodos()
}

export function createTodo(
  {
    title,
    description,
  }: {
    title: string
    description: string
  },
  { createTodo = todoRepository.createTodo } = {},
): Promise<Todo> {
  return createTodo({ title, description })
}

export function deleteTodo(
  id: string,
  { deleteTodo = todoRepository.deleteTodo } = {},
) {
  return deleteTodo(id)
}

export function updateTodo(
  id: string,
  {
    title,
    description,
  }: {
    title: string
    description: string
  },
  { updateTodo = todoRepository.updateTodo } = {},
) {
  return updateTodo(id, { title, description })
}

export function completeTodo(
  id: string,
  { completeTodo = todoRepository.completeTodo } = {},
) {
  return completeTodo(id)
}
