import parser, { j2xParser as Parser } from 'fast-xml-parser'
import fetch from './fetch'
import { HttpResponse } from 'fts-core'

export default async function convertURLToXML(
  url: string,
  options?: Partial<parser.J2xOptions>
): Promise<HttpResponse> {
  const _options = options || {}
  const json = JSON.parse(await fetch(url))
  const parser = new Parser(_options)

  return {
    headers: {
      'Content-Type': 'text/xml'
    },
    statusCode: 200,
    body: parser.parse(json)
  }
}
