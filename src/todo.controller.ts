import { Router } from 'express'

import {
  createTodo,
  deleteTodo,
  findTodo,
  findTodos,
  updateTodo,
} from './todo.service'
import { buildTodoView } from './todo.view'

export const todoRouter = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id

    const todo = await findTodo(id)

    return res.status(200).json({ todo: buildTodoView(todo) })
  })
  .get('/', async (_, res) => {
    const todos = await findTodos()

    return res.status(200).json({ todos: todos.map(buildTodoView) })
  })
  .post('/', async (req, res) => {
    const { title, description } = req.body

    const todo = await createTodo({ title, description })

    return res.status(201).json({ todo: buildTodoView(todo) })
  })
  .put('/:id', async (req, res) => {
    const id = req.params.id
    const { title, description } = req.body

    await updateTodo(id, { title, description })

    return res.status(204).json()
  })
  .delete('/:id', async (req, res) => {
    const id = req.params.id

    await deleteTodo(id)

    return res.status(204).json()
  })
