export default function RunnerDashboard({ requests }) {
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-6xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Runner Dashboard</h1>
          <p className="text-3xl text-[#4f6f8f] dark:text-[#b8d1ef]">Available tasks near you</p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e3c5c] font-bold text-white">MP</div>
          <div>
            <p className="font-bold dark:text-[#dbe7f5]">Maya Patel</p>
            <p className="text-[#5f748b] dark:text-[#b8d1ef]">⭐ 94 Trust Score · Nursing '24</p>
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-[28px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <p className="mb-2 text-sm text-[#5f748b] dark:text-[#b8d1ef]">Today's earnings</p>
          <p className="text-6xl font-bold text-[#1e3c5c] dark:text-[#8fb8e6]">$48.50</p>
          <p className="text-2xl text-[#22a65e]">↑ 12% from yesterday</p>
        </article>
        <article className="rounded-[28px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <p className="mb-2 text-sm text-[#5f748b] dark:text-[#b8d1ef]">Tasks completed</p>
          <p className="text-6xl font-bold text-[#1e3c5c] dark:text-[#8fb8e6]">147</p>
          <p className="text-2xl text-[#5f748b] dark:text-[#b8d1ef]">lifetime</p>
        </article>
        <article className="rounded-[28px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <p className="mb-2 text-sm text-[#5f748b] dark:text-[#b8d1ef]">Acceptance rate</p>
          <p className="text-6xl font-bold text-[#1e3c5c] dark:text-[#8fb8e6]">98%</p>
          <p className="text-2xl text-[#5f748b] dark:text-[#b8d1ef]">last 30 days</p>
        </article>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-[28px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <h3 className="mb-4 text-3xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">🔥 Hot tasks near you</h3>
          {requests.slice(0, 8).map((task, index) => (
            <div key={task.id || `${task.item}-${index}`} className="flex items-center justify-between border-b border-[#ecf1f7] py-4 dark:border-[#2a3b53]">
              <div className="flex items-center gap-3">
                {task.photo && <img src={task.photo} alt="item" className="h-12 w-12 rounded-lg object-cover" />}
                <div>
                  <p className="text-2xl font-semibold text-[#0b1a2a] dark:text-[#dbe7f5]">{task.item}</p>
                  <p className="text-xl text-[#5f748b] dark:text-[#b8d1ef]">{task.from}</p>
                </div>
              </div>
              <span className="rounded-full bg-[#e6f0f9] px-4 py-1 text-xl font-semibold text-[#1e3c5c]">${task.tip} tip</span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <article className="rounded-[24px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
            <h4 className="mb-3 text-2xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Runner Rank</h4>
            <p className="mb-2 text-[#4d6278] dark:text-[#dbe7f5]">Next: Diamond (96+ Trust Score)</p>
            <div className="h-3 rounded-full bg-[#e2eaf1]">
              <div className="h-3 w-[68%] rounded-full bg-[#f0b34b]" />
            </div>
            <p className="mt-2 text-[#4d6278] dark:text-[#dbe7f5]">Current 94 · Goal 96</p>
          </article>

          <article className="rounded-[24px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
            <h4 className="mb-3 text-2xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Recent reviews</h4>
            <p className="text-[#5f748b] dark:text-[#dbe7f5]">★★★★★ “Super fast, brought it right to my door!”</p>
            <p className="mt-3 text-[#5f748b] dark:text-[#dbe7f5]">★★★★★ “Friendly and communicated the whole way”</p>
          </article>
        </div>
      </div>
    </section>
  )
}
