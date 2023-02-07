import { connect } from 'mongoose'

import { MONGODB_URL } from '../config'

export async function initMongoDb() {
  await connect(MONGODB_URL)
}
