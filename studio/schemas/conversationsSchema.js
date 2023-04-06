export const conversationsSchema = {
  name: 'conversations',
  type: 'document',
  title: 'Conversations',
  fields: [
    {
      name: 'roomName',
      type: 'string',
      title: 'Room Name',
    },
    {
      name: 'roomId',
      type: 'string',
      title: 'Room Id',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}