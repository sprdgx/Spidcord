import styles from '../styles/conversationList.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'
import DmCard from './DmCard'



export default function ConversationList () {



    const [dms, setDms] = useState<any[]>([])
    
    useEffect( () => {
      (async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/getdms`,
          )
    
          const data = await response.json()
          setDms(data)

        } catch (error) {
          console.error(error)
        }
      }) ()
      }, [])




    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input className={styles.inputSearch} type="search" placeholder='Find or start a conversation'/>
            </div>
            <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={friends}
              className={styles.svg}
              alt='friends'
            />
          </div>
          <p>Fiends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={nitro}
              className={styles.svg}
              alt='nitro'
            />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        <div className={styles.contact}>
        {dms.map((dm) => (
            <DmCard                
                name={dm.name}
                id={dm.walletAddress}
                avatar={
                    dm.image ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
                }
            />
        ))}
      </div>
      </div>
        </div>
    )
}