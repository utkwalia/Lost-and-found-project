const requester = [
  'Room number hidden until runner picks up',
  'Only verified students can accept',
  'Report button if anything feels off',
]

const runner = [
  'Full room # only after task start',
  'Never enter a room — deliver at door',
  'SOS button connected to campus security',
]

export default function Safety() {
  return (
    <section>
      <h1 className="mb-10 text-center text-5xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Safety first, always</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[28px] bg-white p-8 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <span className="rounded-full bg-[#1e3c5c] px-4 py-1 text-sm text-white">For requesters</span>
          <ul className="mt-6 space-y-4 text-lg text-[#2d3a4a] dark:text-[#dbe7f5]">
            {requester.map((item) => (
              <li key={item}>✅ {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[28px] bg-white p-8 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <span className="rounded-full bg-[#f0b34b] px-4 py-1 text-sm text-[#1a1e24]">For runners</span>
          <ul className="mt-6 space-y-4 text-lg text-[#2d3a4a] dark:text-[#dbe7f5]">
            {runner.map((item) => (
              <li key={item}>✅ {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
