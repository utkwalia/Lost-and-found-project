import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <section className="mx-auto max-w-xl rounded-[40px] bg-white p-10 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
      <h1 className="mb-2 text-5xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Join Dorm-Dash</h1>
      <p className="mb-6 text-[#4d6278] dark:text-[#dbe7f5]">Start dashing in minutes</p>
      <input className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" placeholder="Full name" />
      <input className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" placeholder="University email" />
      <input className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" placeholder="Dorm / hall" />
      <input type="password" className="mb-6 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" placeholder="Create a password" />
      <button className="w-full rounded-full bg-[#1e3c5c] py-3 text-2xl font-semibold text-white">Create account</button>
      <p className="mt-4 text-[#4d6278] dark:text-[#dbe7f5]">
        Already have an account? <Link className="font-semibold text-[#1e3c5c] dark:text-[#8fb8e6]" to="/login">Log in</Link>
      </p>
    </section>
  )
}
