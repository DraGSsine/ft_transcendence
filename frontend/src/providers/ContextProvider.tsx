import ChatProvider from '@/context/ChatContext'
import React, { ReactElement } from 'react'

const ContextProvider = ({children}:{children:ReactElement}) => {
  return (
    <ChatProvider>
        {children}
    </ChatProvider>
  )
}

export default ContextProvider