import { model, Schema, Types } from 'mongoose'

// Create an interface to represent a document in MongoDB
export interface Todo {
  _id: Types.ObjectId
  title: string
  description: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

// Create a Schema corresponding to the document interface
const todoSchema = new Schema<Todo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
    deletedAt: { type: Date, required: false },
  },
  {
    timestamps: true,
  },
)

// Create a model
export const TodoModel = model<Todo>('todo', todoSchema)
