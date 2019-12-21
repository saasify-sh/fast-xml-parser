import got from 'got'

export default async function fetch(url: string): Promise<string> {
  const res = await got(url, { responseType: 'buffer' })
  return res.body.toString()
}
