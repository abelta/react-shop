import * as types from '../actionTypes'
import Faker from 'Faker'

const randomItem = (id) => ({
  id: id,
  name: [
    Faker.random.catch_phrase_adjective(),
    Faker.random.catch_phrase_descriptor(),
    Faker.random.catch_phrase_noun()
  ].join(' '),
  price: parseFloat(`${Faker.random.number(99)}.${Faker.random.number(99)}`),
  available: Faker.random.number(30)
})

const getCatalog = () => ({
  type: types.GET_CATALOG,
  items: [1, 2, 3, 4, 5, 6, 7, 8].map((elem, i) => randomItem(i))
})

export default getCatalog
