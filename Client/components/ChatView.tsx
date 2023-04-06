import styles from '../styles/chatView.module.css'
import { Key, useContext } from 'react'
import ChatHeader from './ChatHeader'
import MessageForm from './MessageForm'
import { DiscordContext } from '@/context/context'
import MessageCard from './MessageCard'


export default function ChatView () {
    const { state } = useContext(DiscordContext)
    const formattedMessagesArray = () => {
        const uniqueArray = state.messages.filter((value: any, index: any) => {
          const _value = JSON.stringify(value)
    
          return (
            index ===
            state.messages.findIndex((obj: any) => {
              return JSON.stringify(obj) === _value
            })
          )
        })
        return uniqueArray
    }
    return (
        <div className={styles.chatView}>
            <ChatHeader/>
            <div className={styles.remarkchatview}>
            <div className={styles.messagesContainer}>
            {formattedMessagesArray().map((message: { avatar: any; sender: any; createdAt: any; content: any }, index: Key | null | undefined) => (
                <MessageCard
                key={index}
                avatar={message.avatar}
                sender={message.sender}
                timestamp={message.createdAt}
                content={message.content} />
        ))}

            </div>
            <div className={styles.remark}>
                  <h1 className={styles.admin} >For Confirmation Make Sure to Contact The App Creator</h1>
                  <h1 className={styles.contact} >1-/ Contact spardagx@gmail.com</h1>
                  <h1 className={styles.instructions} >2-/ Send Your Wallet Adress That You Sign In With And Your Photo And Your Name Of Course</h1>
            </div>
            </div>
            <MessageForm/>
        </div>
    )
}