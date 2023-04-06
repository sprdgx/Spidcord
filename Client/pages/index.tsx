import styles from '../styles/Home.module.css'
import  ConversationList  from '../components/ConversationList'
import ChatView from '../components/ChatView'
import SideBar from '../components/SideBar'
import Head from 'next/head'

export default function Home() {


  return (

    <>
    <Head>
      <title>Spidcord</title>
      <meta name="description" content="Discord Clone For Spidders" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://raw.githubusercontent.com/sprdgx/Photos/main/spidcord.png" />
    </Head>
    <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.main}>
          <ChatView />
        </div>
      </div>
      </>
  )
}