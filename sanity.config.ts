import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'sagebrush-web-studio',
  title: 'Sagebrush Web Studio',
  projectId: 'ep6lhc8r',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
