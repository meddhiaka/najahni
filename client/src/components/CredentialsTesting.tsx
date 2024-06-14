'use client'
import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

function CredentialsTesting() {
  const session = useSession()
  
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    async function getUser() {
      const user = await axios.post('http://localhost:1337/v1/api/user', { email: session.data?.user?.email })
      setUser(user.data)
    }

    if (session.data?.user?.email) {
      getUser()
    }

  }, [session.data?.user?.email])
  return (
    <div>
      <p>name: {session.data?.user?.name}</p>
      <p>email: {session.data?.user?.email}</p>
    </div>
  )
}

export default CredentialsTesting