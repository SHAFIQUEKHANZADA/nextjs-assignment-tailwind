import Image from 'next/image'
import React from 'react'

const LogIn = () => {
    return (
        <div className='min-h-screen flex  justify-center items-center bg-slate-200 relative'>
            <div className='flex md:flex-row flex-col w-full justify-center items-center '>

                {/* Left side with the image */}
                <div className='flex justify-center items-center relative'>
                    <div className='md:w-[56vw] w-[90%] h-full justify-start bg-slate-200'>
                        <Image src={"/images/login.png"} alt='login' width={800} height={500} className='w-full drop-shadow-2xl' />
                    </div>
                </div>

                {/* Right side with the inputs */}
                <div className=''>
                    <div className='md:w-[37vw] w-[95vw] md:h-[500px] h-auto bg-slate-200 p-8  shadow-2xl'>
                        <h1 className='text-3xl font-bold mb-6 text-center'>Login</h1>
                        <form className='space-y-6'>
                            <div>
                                <label className='block text-gray-700 font-semibold mb-1' htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700 font-semibold mb-1' htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='Enter your password'
                                />

                                <div className='flex'>
                                    <p><a href="/sign-uo" className='text-blue-500 underline text-[14px]'>forgot password?</a></p>
                                </div>
                            </div>


                            <button
                                type='submit'
                                className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300'
                            >
                                Login
                            </button>
                            <div className='flex justify-center pt-20'>
                                <p className='text-[13px]'>Don&apost have an account ? <span><a href="/sign-uo" className='text-blue-500 underline'>Sign Up</a></span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LogIn