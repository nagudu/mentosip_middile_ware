
import { profile_questions } from '../controllers/regester'

module.exports = (app) => {
  app.post('/api/regester', profile_questions)
}