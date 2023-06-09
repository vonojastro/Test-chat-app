import { UserAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'
import { useNavigate } from "next"
import { useRouter } from 'next/router'
import Head from 'next/head'

const Login = () => {
  const { currentUser, signinWithGoogle } = UserAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.push('/chatRoom')
    } else {
      router.push('/')
    }
  }, [currentUser])

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error)
    }
  }
  console.log(currentUser)

  return (
    <>
      <Head>
        <title>Chat app - test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 flex justify-center items-center h-screen">

        <div className="bg-blue-400 max-w-6xl w-full mx-auto h-[70vh] p-5 rounded-lg flex justify-center items-center">


          <button onClick={handleLogin} className='px-6 py-5 hover:bg-gray-400 hover:text-white duration-300 ease-in-out bg-white rounded-lg'>Login with google</button>
        </div>

      </main>
    </>
  )
}

export default Login