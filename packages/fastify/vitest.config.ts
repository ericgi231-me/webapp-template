import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Use Node.js environment (not browser)
    environment: 'node',
    
    // Where to find test files
    include: ['test/**/*.test.ts'],
    
    // Enable global test functions (describe, it, expect)
    globals: true,
  },
})
