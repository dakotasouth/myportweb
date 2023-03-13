"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignIn = () => {
    const {data: session} = useSession();
    return (
        <div>
        {!session && (
            <button onClick={() => signIn()}>Sign in</button>
        )}
        {session && (
            <div>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )}
        </div>
    )
}

export default SignIn;