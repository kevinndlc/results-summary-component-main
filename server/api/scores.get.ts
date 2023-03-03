import { Score } from '~/types'
import scores from '../data.json'

scores as Score[]

export default defineEventHandler(async event => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return scores
})