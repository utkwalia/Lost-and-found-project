import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-block rounded-full bg-[#e8edf2] px-4 py-1 text-sm font-semibold text-[#1e3c5c] dark:bg-[#24364d] dark:text-[#dbe7f5]">
            🔥 2,847 tasks completed this week
          </p>
          <h1 className="mb-6 text-6xl font-extrabold leading-tight text-[#0b1a2a] dark:text-[#dbe7f5]">
            Stuck in your room? <span className="rounded-xl bg-[#e2eaf1] px-2 text-[#1e3c5c] dark:bg-[#c5dcf8]">Dash it.</span>
          </h1>
          <p className="mb-8 text-xl text-[#3f4d5e] dark:text-[#dbe7f5]">
            Get snacks, supplies, or favors from peers who are already on their way. Campus-only trust network.
          </p>
          <div className="flex gap-4">
            <Link to="/signup" className="rounded-full border border-[#1e3c5c] bg-[#1e3c5c] px-8 py-3 font-semibold text-white">
              Get started
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-full border border-[#1e3c5c] px-8 py-3 font-semibold text-[#1e3c5c] dark:border-[#9cb7d6] dark:text-[#dbe7f5]"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#d4e0ec] to-[#eef3f8] p-6 dark:from-[#203247] dark:to-[#172233]">
          <div className="rounded-2xl bg-[#eef3f8] p-4 dark:bg-[#24364d]">
            <div className="grid grid-cols-3 gap-3">
              {['West 5 active', 'Library 3 active', 'North 4 active', 'Gym 2 active', 'East 6 active', 'South 3 active'].map((cell) => (
                <div key={cell} className="rounded-xl bg-[#c5d5e8] p-3 text-sm font-semibold text-[#1e3c5c]">
                  {cell}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-white p-3 text-[#1e3c5c]">
              <div className="flex justify-between text-sm">
                <span>Tuck Shop → Water + chips</span>
                <b>$12</b>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span>Library → Textbook pickup</span>
                <b>$8</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-8 text-center text-4xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">How students use Dorm-Dash</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['📚', 'Study fuel', 'Pulled an all-nighter and needed coffee. Runner brought it in 8 mins.', '— Alex, CS major'],
            ['🏃', 'Earn on your route', 'I walk across campus anyway — made $240 this month on my way to class.', '— Maya, Nursing'],
            ['🛡️', 'Trust scores', 'Reliability ranking. Only verified students. Campus security integrated.', ''],
          ].map(([icon, title, copy, author]) => (
            <article key={title} className="rounded-[28px] border border-[#edf2f7] bg-white p-6 shadow-sm dark:border-[#2a3b53] dark:bg-[#172233]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4fa] text-3xl">{icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">{title}</h3>
              <p className="text-[#4d6278] dark:text-[#dbe7f5]">{copy}</p>
              {author && <p className="mt-4 font-semibold text-[#1e3c5c] dark:text-[#8fb8e6]">{author}</p>}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
