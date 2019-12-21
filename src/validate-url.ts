import parser from 'fast-xml-parser'
import fetch from './fetch'

export default async function validateURL(url: string): Promise<any> {
  return parser.validate(await fetch(url))
}
