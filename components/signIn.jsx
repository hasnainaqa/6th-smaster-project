
'use client';  

import React from 'react';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div>
      <button onClick={() => signIn('google')}>
        Sign In with Google
      </button>
    </div>
  );
}

export default SignIn;
