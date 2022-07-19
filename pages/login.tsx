import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <>
            <Head>
                <title>Login - Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
                <Image 
                    // src="https://rb.gy/p2hphi" 
                    src="https://thevenya.com/media/media_files/1607202213052730581713117_mMzXSIs.webp"
                    alt="" 
                    layout="fill" 
                    objectFit="cover" 
                    className="-z-10 !hidden opacity-60 sm:!inline" 
                />
                Login Page
            </div>
        </>
    )
}

export default Login