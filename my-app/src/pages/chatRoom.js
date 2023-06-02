import Navbar from '@/components/Navbar'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ChatRoom = () => {
  const { currentUser, logout } = UserAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.push('/chatRoom')
    } else {
      router.push('/login')
    }
  })
  const [message, setMessage] = useState({
    text: '',
    img: ''
  })

  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center h-[95vh]">
        <div className="bg-blue-400 max-w-6xl w-full mx-auto h-[70vh] p-5 rounded-lg">
          {/* Messages */}
          <div className='h-[80%] bg-white my-2 rounded-lg'>

          </div>

          {/* Post */}
          <div className='flex flex-col gap-2'>
            <input type='file' value={message.img} onChange={(e) => setMessage({ ...message, text: e.target.value })} />
            <input type='text' className='w-full rounded-full px-5 py-2' placeholder='Type your message here...' value={message.text} onChange={(e) => setMessage({ ...message, text: e.target.value })} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChatRoom