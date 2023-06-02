import Navbar from '@/components/Navbar'
import { UserAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

const ChatRoom = () => {
  const { currentUser, logout } = UserAuth()
  const router = useRouter()
  const [value, setValue] = useState("");
  const messagesEndRef = useRef();
  const [messages, setMassages] = useState([]);

  useEffect(() => {
    if (currentUser) {
      router.push('/chatRoom')
    } else {
      router.push('/')
    }
  })


  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(messages);
    });

    return () => unsubscribe;
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch (error) {
      console.log(error);
    }
    setValue("");
  }

  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center h-[95vh]">
        <div className="bg-blue-400 max-w-6xl w-full mx-auto h-[70vh] p-5 rounded-lg">
          {/* Messages */}
          <div className='h-[80%] bg-white my-2 rounded-lg flex flex-col-reverse p-5 overflow-x-scroll'>

            {messages.map((message) => (
              <div key={message.id} className={`flex flex-col gap-2  py-4 ${message.uid && message.uid === currentUser?.uid ? "items-end" : "items-start"}  w-full`}>
                <div className='flex gap-2 items-center '>
                  <img src={message.avatar} className='bg-gray-400 w-7 h-7 rounded-full' />
                  <p className='text-sm text-gray-500 capitalize'> {message.name}</p>
                </div>
                <p className='px-5 py-2 rounded-md text-white bg-blue-200'>{message.text}</p>
              </div>
            ))}
          </div>

          {/* Post */}
          <form onSubmit={handleSendMessage} className='flex gap-2'>
            {/* <input type='file' value={message.img} onChange={(e) => setMessage({ ...message, text: e.target.value })} /> */}
            <input type='text' className='w-full rounded-full px-5 py-2' placeholder='Type your message here...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button className='rounded-full px-5 py-2 bg-white hover:bg-gray-400 duration-300 ease-in-out'>Send</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ChatRoom