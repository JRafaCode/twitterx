import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
/* import { AuthButtonServer } from './components/auth-button-server'; */
import { redirect } from "next/navigation"
import { NextPage } from "next";

import TweetInput from './components/TweetInput';
import TweetCard from './components/TweetCard';

/* export default async function Home () {
  const supabase = createServerComponentClient({cookies})
  const { data: { session } } = await supabase.auth.getSession()

  if (session == null){
    redirect("/login")
}

  
  const { data: posts } = await supabase.from("posts").select("*, user:users(name, avatar_url, user_name")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {  <AuthButtonServer /> }

{       {
      posts?.map(post => {
        const {
          id,
          user,
          content
        } = post

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl 
        } = user
}
        return (
          <TweetCard
            avatarUrl={avatarUrl}
            content={content}
            key={id}
            userFullName={userFullName}
            userName={userName} 
            />
            <TweetInput/>
        )
    })
      }
      }
    </main>
  )
}  */
const Home: NextPage = () => {
  return (
    <div> {/*Columna Central*/}
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <section className="w-1/2 mx-auto border-l border-r border-white/20 min-h-screen">
        <TweetInput />
        
        <TweetCard />
        </section>
      </main>
    </div>
  );
};

export default Home; 
