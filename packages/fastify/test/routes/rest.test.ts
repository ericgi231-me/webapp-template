import { describe, it, expect, afterEach } from 'vitest'
import { createTestApp } from '../helper.js'

describe('REST Route Tests', () => {
  let app: Awaited<ReturnType<typeof createTestApp>>

  afterEach(async () => {
    if (app) await app.close()
  })

  it('should return example message', async () => {
    app = await createTestApp()

    const response = await app.inject({
      method: 'GET',
      url: '/rest/'
    })

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe('this is an example')
  })
})
