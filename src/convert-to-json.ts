import parser from 'fast-xml-parser'

export default async function convertToJSON(input: Buffer): Promise<object> {
  const xml = input.toString()

  if (!parser.validate(xml)) {
    throw new Error('XML not valid')
  }

  const traversalObject = parser.getTraversalObj(xml, {})

  return parser.convertToJson(traversalObject, {}) as object
}
