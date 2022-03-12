import { getSession, signIn, signOut } from "next-auth/react"

export default function Component({session}) {
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})
  if(!session) {
    return{
      redirect:{
        destination: '/api/auth/signin',
        permanent: false,
      }
    }
  }
  console.log(session)
  return {
    props: {session,}
  }
}