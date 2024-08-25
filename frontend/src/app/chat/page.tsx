import MessagesList from '@/components/chat/MessagesList'
import MessagesSection from '@/components/chat/MessagesSection'
import UserOverview from '@/components/chat/UserOverview'
import React from 'react'

const page = () => {
  return (
    <main className=' rounded-2xl w-full h-[85vh] gap-5 flex'>
      <MessagesList />
      <MessagesSection />
    </main>
  )
}

export default page