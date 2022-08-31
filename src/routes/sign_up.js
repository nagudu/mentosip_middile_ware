
import { sign_in, sign_up } from '../controllers/sign_up'

module.exports = (app) => {
  app.post('/api/sign_up', sign_up)
  app.post('/api/sign_in', sign_in)
}