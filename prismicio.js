import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from './sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

export let repository = {};
export let locales = [];

// This factory function allows smooth preview setup
export const createClient = async (config = {}) => {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  repository = await client.getRepository();

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}


(async () => {
  const client = createClient();
  repository = await (await client).getRepository();
  locales = repository.languages.map(lang => lang.id);
})();