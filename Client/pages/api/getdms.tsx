import { client } from '../../lib/client'

const query = `*[_type == "users" ]{
  name,
  walletAddress,
  "image": profileImage.asset->url
}`

export default async (req:any, res:any) => {
  try {
    const sanityResponse = await client.fetch(query)

    res.status(200).send(sanityResponse)
  } catch (error) {
    console.error(error)
    res.status(500).send('⚠️', error)
  }
}
