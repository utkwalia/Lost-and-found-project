import { useState } from 'react'

export default function RequesterDashboard({ requests, onAddRequest }) {
  const [item, setItem] = useState('')
  const [from, setFrom] = useState('')
  const [tip, setTip] = useState('10')
  const [photoPreview, setPhotoPreview] = useState('')

  const tipOptions = ['5', '8', '10', '15']

  const onFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPhotoPreview('')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      alert('Image must be 2MB or smaller')
      e.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = () => setPhotoPreview(reader.result)
    reader.readAsDataURL(file)
  }

  const submit = () => {
    if (!item.trim() || !from.trim() || !tip) {
      alert('Please fill all required fields.')
      return
    }
    onAddRequest({ item: item.trim(), from: from.trim(), tip: Number(tip), photo: photoPreview })
    setItem('')
    setFrom('')
    setTip('10')
    setPhotoPreview('')
  }

  return (
    <section>
      <h1 className="mb-2 text-6xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Requester Dashboard</h1>
      <p className="mb-6 text-3xl text-[#4f6f8f] dark:text-[#b8d1ef]">Track your active requests</p>

      <article className="mb-6 rounded-[28px] bg-[#1e3c5c] p-8 text-white">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Active Request #2341</h2>
          <span className="rounded-full bg-[#f0b34b] px-4 py-1 font-semibold text-[#1a1e24]">IN PROGRESS</span>
        </div>
        <p className="text-xl text-white/80">Runner is at Student Union → heading to West Hall · ETA 4 min</p>
      </article>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-[28px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
          <h3 className="mb-4 text-3xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Recent requests</h3>
          {requests.length === 0 ? (
            <p className="text-[#5f748b] dark:text-[#b8d1ef]">No recent requests yet.</p>
          ) : (
            requests.map((r) => (
              <div key={r.id} className="flex items-center justify-between border-b border-[#ecf1f7] py-4 dark:border-[#2a3b53]">
                <div className="flex items-center gap-3">
                  {r.photo && <img src={r.photo} alt="item" className="h-12 w-12 rounded-lg object-cover" />}
                  <div>
                    <p className="text-2xl font-semibold text-[#0b1a2a] dark:text-[#dbe7f5]">{r.item}</p>
                    <p className="text-xl text-[#5f748b] dark:text-[#b8d1ef]">{r.from}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#e6f0f9] px-4 py-1 text-xl font-semibold text-[#1e3c5c]">${r.tip}</span>
              </div>
            ))
          )}
        </div>

        <div>
          <div className="rounded-[24px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
            <h4 className="mb-4 text-3xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">Quick request</h4>
            <label className="mb-2 block text-xl font-semibold text-[#1e2f40] dark:text-[#dbe7f5]">What do you need?</label>
            <input value={item} onChange={(e) => setItem(e.target.value)} className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" placeholder="e.g. Water, chips, coffee..." />

            <label className="mb-2 block text-xl font-semibold text-[#1e2f40] dark:text-[#dbe7f5]">From where?</label>
            <input value={from} onChange={(e) => setFrom(e.target.value)} className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" placeholder="Tuck Shop / Library / etc." />

            <label className="mb-2 block text-xl font-semibold text-[#1e2f40] dark:text-[#dbe7f5]">Tip amount ($)</label>
            <input value={tip} onChange={(e) => setTip(e.target.value)} className="mb-4 w-full rounded-2xl border border-[#dde5ed] p-4 text-xl dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" />

            <label className="mb-2 block text-xl font-semibold text-[#1e2f40] dark:text-[#dbe7f5]">Item photo (optional)</label>
            <input type="file" accept="image/*" onChange={onFileChange} className="mb-3 block w-full rounded-2xl border border-[#dde5ed] p-4 text-lg dark:border-[#344963] dark:bg-[#0f1621] dark:text-[#dbe7f5]" />
            {photoPreview && <img src={photoPreview} alt="preview" className="mb-4 h-36 w-full rounded-xl object-cover" />}

            <button onClick={submit} className="w-full rounded-full bg-[#1e3c5c] py-3 text-2xl font-semibold text-white">Post request</button>
          </div>

          <div className="mt-6 rounded-[24px] bg-[#e6f0f9] p-6 dark:border dark:border-[#2a3b53] dark:bg-[#24364d]">
            <h4 className="text-3xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">💰 Tip suggestions</h4>
            <p className="mb-4 text-[#2d3a4a] dark:text-[#dbe7f5]">Higher tips get picked up faster</p>
            <div className="flex gap-2">
              {tipOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setTip(opt)}
                  className={`rounded-full px-4 py-2 text-2xl font-semibold ${
                    tip === opt ? 'bg-[#1e3c5c] text-white' : 'bg-white text-[#1e3c5c]'
                  }`}
                >
                  ${opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
