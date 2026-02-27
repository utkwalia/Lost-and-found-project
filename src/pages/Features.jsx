const cards = [
  ['🗺️', 'Live runner map', "See who's moving near you. Tasks get picked up faster when someone is already on the way."],
  ['⭐', 'Runner rank (trust score)', 'Bronze to Diamond. More completed tasks unlock better visibility and perks.'],
  ['🪪', 'Student ID verification', 'Every user is verified with .edu email + ID photo. No outsiders.'],
]

export default function Features() {
  return (
    <section>
      <h1 className="mb-2 text-center text-5xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Built for campus life</h1>
      <p className="mb-10 text-center text-[#4d6278] dark:text-[#dbe7f5]">Everything you need for safe, fast, friendly task swapping.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(([icon, title, copy]) => (
          <article key={title} className="rounded-[28px] border border-[#edf2f7] bg-white p-6 shadow-sm dark:border-[#2a3b53] dark:bg-[#172233]">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4fa] text-3xl">{icon}</div>
            <h2 className="mb-2 text-2xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">{title}</h2>
            <p className="text-[#4d6278] dark:text-[#dbe7f5]">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
