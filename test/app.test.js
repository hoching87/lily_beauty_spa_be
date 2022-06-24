import request from 'supertest'
import app from '../app.js'

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.body).toStrictEqual({ root: 'this is root' })
  })
})
