import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '3vwyz2kc',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
