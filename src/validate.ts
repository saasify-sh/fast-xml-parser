import parser from 'fast-xml-parser'

export default async function validate(input: Buffer): Promise<any> {
  return parser.validate(input.toString())
}
