
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';


const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log(" user : ", user);
            console.log(" Account : ", account);
            if (account.provider === 'google') {
                try {
                    const {name,email} = user
                    const res = await fetch('http://localhost:3000/api/user' , {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        
                        body: JSON.stringify({ name, email }),
                        
                    }
                    )
                    if (res.ok){
                        return user
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };