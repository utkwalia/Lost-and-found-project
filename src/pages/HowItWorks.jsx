const steps = [
  ['1', 'Post a task', 'Need water from Tuck Shop, room 512, $8 tip.'],
  ['2', 'Runner accepts', 'Nearby student grabs it. See ETA and live location.'],
  ['3', 'Meet at door', 'Runner drops off, you rate each other. Trust score updates.'],
]

export default function HowItWorks() {
  return (
    <section>
      <h1 className="mb-12 text-center text-5xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Three steps to your next snack</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map(([n, title, copy]) => (
          <article key={n} className="w-[280px] rounded-[32px] bg-white p-8 text-center shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1e3c5c] text-2xl font-bold text-white">{n}</div>
            <h3 className="mb-2 text-3xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">{title}</h3>
            <p className="text-[#4d6278] dark:text-[#dbe7f5]">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
