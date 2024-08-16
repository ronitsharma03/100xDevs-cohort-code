'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Appbar = () => {
    const session = useSession();
  return (
    <div className='flex gap-2'>
        <button className='bg-slate-200 text-black p-2 rounded-md' onClick={() => {
            signIn();
        }}>Sign in</button>
        <button className='bg-slate-200 text-black p-2 rounded-md' onClick={() => {
            signOut();
        }}>Sign out</button>
    {JSON.stringify(session)}   
    </div>
  )
}

export default Appbar