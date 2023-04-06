import { client } from '../../lib/client'

export default async (req:any, res:any) => {
  const { userAddress, name } = req.body

  const userDoc = {
    _type: 'users',
    _id: `${userAddress}-user`,
    name: 'Waiting Auth ...',
    walletAddress: userAddress,
  }
  try {
    await client.createIfNotExists(userDoc)

    res.status(200).send('Successful')
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}