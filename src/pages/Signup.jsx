import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [dorm, setDorm] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!fullName.trim() || !email.trim() || !dorm.trim() || !password.trim()) {
      setError('Please complete every field to create an account.')
      return
    }

    if (!email.includes('@')) {
      setError('Please use a valid university email address.')
      return
    }

    navigate('/requester-dashboard')
  }

  return (
    <section className="mx-auto max-w-xl rounded-[40px] bg-white p-10 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
      <h1 className="mb-2 text-5xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Join Dorm-Dash</h1>
      <p className="mb-6 text-[#4d6278] dark:text-[#dbe7f5]">Start dashing in minutes</p>
      <form onSubmit={onSubmit}>
        <input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]"
          placeholder="Full name"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]"
          placeholder="University email"
        />
        <input
          value={dorm}
          onChange={(event) => setDorm(event.target.value)}
          className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]"
          placeholder="Dorm / hall"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]"
          placeholder="Create a password"
        />
        {error && <p className="mb-4 text-sm text-[#c43d3d]">{error}</p>}
        <button type="submit" className="w-full rounded-full bg-[#1e3c5c] py-3 text-2xl font-semibold text-white">
          Create account
        </button>
      </form>
      <p className="mt-4 text-[#4d6278] dark:text-[#dbe7f5]">
        Already have an account? <Link className="font-semibold text-[#1e3c5c] dark:text-[#8fb8e6]" to="/login">Log in</Link>
      </p>
    </section>
  )
}
