import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const submitHandler= (e)=>{
        e.preventDefault()
        console.log("Email is:", email)
        console.log("Password is:",password)

        setEmail("")
        setPassword("")

    }
return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-[2px] border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className="flex flex-col items-center justify-center" >
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                required className="border-2 border-emerald-600 py-3 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400" type="email" placeholder='Enter your email' />

                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                required className="border-2 border-emerald-600 py-3 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3" type="password" placeholder='Enter your password' />
                <button className="bg-emerald-600 py-3 px-5 rounded-full text-xl outline-none placeholder:text-white mt-2">Log In</button>
            </form>
        </div>
    </div>
)
}

export default Login
