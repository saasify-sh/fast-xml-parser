import { j2xParser as Parser } from 'fast-xml-parser'
import { HttpResponse } from 'fts-core'

export default async function convertToXML(
  input: Buffer | object
): Promise<HttpResponse> {
  const json = Buffer.isBuffer(input) ? JSON.parse(input.toString()) : input

  const parser = new Parser({})

  return {
    headers: {
      'Content-Type': 'text/xml'
    },
    statusCode: 200,
    body: parser.parse(json)
  }
}
