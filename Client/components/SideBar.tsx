import styles from '../styles/SideBar.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RoomAvatar from './RoomAvatar'

export default function SideBar () {


    const router = useRouter()
    const [channels, setChannels] = useState<any[]>([])

    useEffect( () => {
      (async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/getchannels`,
          )
    
          const data = await response.json()
          setChannels(data)
    
          router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
        } catch (error) {
          console.error(error)
        }
      }) ()
      }, [])


    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src="https://raw.githubusercontent.com/sprdgx/Photos/main/spidcord.png" height={50} width={50} />
            {channels.map((channel, index) => (
        <RoomAvatar 
          key={index}
          id={channel.roomId}
          avatar={channel.avatar}
          name={channel.roomName}
        />
      ))}
        </div>
    )
}