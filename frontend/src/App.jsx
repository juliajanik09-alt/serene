import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    alert('Tu podepniesz backend URL')
  }

  return (
    <div style={{textAlign:'center', marginTop:'100px'}}>
      <h1>Login SaaS</h1>
      <input placeholder='email' onChange={e=>setEmail(e.target.value)} />
      <input placeholder='password' type='password' onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  )
}
