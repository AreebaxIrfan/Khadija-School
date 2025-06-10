import { type SchemaTypeDefinition } from 'sanity'
import studentRegistration from './studentRegistration'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [studentRegistration],
}
