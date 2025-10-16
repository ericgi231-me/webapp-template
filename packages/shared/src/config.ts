export type AppConfig = {
  // public runtime values (safe to expose to browser)
  basePath: string      // e.g. "/NEW_APP/"
  apiBase: string       // e.g. "/api" or "https://api.example"
  featureFoo?: boolean
}

export const DEFAULT_CONFIG: AppConfig = {
  basePath: '/',
  apiBase: '/api',
  featureFoo: false,
}