import parser from 'fast-xml-parser'
import fetch from './fetch'

export default async function convertURLToJSON(
  url: string,
  options?: Partial<parser.X2jOptions>
): Promise<object> {
  const xml = await fetch(url)

  if (!parser.validate(xml)) {
    throw new Error('XML not valid')
  }

  const _options = options || {}
  const traversalObject = parser.getTraversalObj(xml, _options)

  return parser.convertToJson(traversalObject, _options) as object
}
