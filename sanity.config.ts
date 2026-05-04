import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: schema,
})
