
import { contact } from '../controllers/contact'

module.exports = (app) => {
  app.post('/api/contact', contact)
}