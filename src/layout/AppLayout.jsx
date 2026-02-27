import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SupportChatbot from '../components/SupportChatbot'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/safety', label: 'Safety' },
  { to: '/runner-dashboard', label: 'Runner Demo' },
  { to: '/requester-dashboard', label: 'Requester Demo' },
]

export default function AppLayout({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#1a1e24] transition-colors dark:bg-[#0f1621] dark:text-[#e7edf5]">
      <nav className="sticky top-0 z-40 border-b border-[#e3ebf3] bg-white/95 px-6 py-4 backdrop-blur dark:border-[#2a3b53] dark:bg-[#172233]/95">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[2rem] font-bold leading-none text-[#1e3c5c] dark:text-[#dbe7f5]">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e3c5c] text-lg text-white">D</span>
            Dorm-Dash
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:bg-[#1e3c5c] after:transition-transform dark:after:bg-[#c5dcf8] ${
                    isActive
                      ? 'text-[#1e3c5c] after:scale-x-100 dark:text-white'
                      : 'text-[#46596f] after:scale-x-0 hover:text-[#1e3c5c] dark:text-[#c6d8ed] dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="rounded-full border border-[#1e3c5c] px-5 py-2 text-sm font-semibold text-[#1e3c5c] hover:bg-[#f0f4f9] dark:border-[#9cb7d6] dark:text-[#dbe7f5] dark:hover:bg-[#24364d]"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            <NavLink to="/login" className="rounded-full border border-[#1e3c5c] px-5 py-2 font-semibold text-[#1e3c5c] dark:border-[#9cb7d6] dark:text-[#dbe7f5]">
              Log in
            </NavLink>
            <NavLink to="/signup" className="rounded-full border border-[#1e3c5c] bg-[#1e3c5c] px-5 py-2 font-semibold text-white">
              Sign up
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[1300px] px-6 py-8">{children}</main>

      <footer className="border-t border-[#e3ebf3] bg-white px-6 py-4 text-center text-sm text-[#5b6f84] dark:border-[#2a3b53] dark:bg-[#172233] dark:text-[#b8d1ef]">
        © 2026 Dorm-Dash · Campus task marketplace · All users verified
      </footer>

      <SupportChatbot />
    </div>
  )
}
