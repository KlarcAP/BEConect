import { defineConfig } from 'drizzle-kit'
import { env } from './server/env'

export default defineConfig({
  schema: "./server/db/schemas.ts",
  dialect: 'postgresql',
  out: "./.migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})