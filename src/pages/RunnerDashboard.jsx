import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import RouteMap from '../components/RouteMap'

const mapRequestRow = (row) => ({
  id: row.id,
  item: row.item_description,
  from: row.pickup_location,
  pickup_location: row.pickup_location,
  dropoff_location: row.dropoff_location,
  tip: row.tip_amount,
  status: row.status,
  createdAt: row.created_at,
})

export default function RunnerDashboard() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTask, setActiveTask] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchRequests = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('requests')
        .select('id, item_description, pickup_location, dropoff_location, tip_amount, status, created_at')
        .eq('status', 'open')
        .order('created_at', { ascending: false })

      if (!isMounted) return

      if (error) {
        console.error('Failed to fetch requests:', error)
        setRequests([])
        setLoading(false)
        return
      }

      setRequests((data || []).map(mapRequestRow))
      setLoading(false)
    }

    fetchRequests()

    const channel = supabase
      .channel('runner-open-requests')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'requests' },
        (payload) => {
          const row = payload.new
          if (row?.status !== 'open') return

          setRequests((prev) => {
            if (prev.some((request) => request.id === row.id)) {
              return prev
            }
            return [mapRequestRow(row), ...prev]
          })
        }
      )
      .subscribe()

    return () => {
      isMounted = false
      supabase.removeChannel(channel)
    }
  }, [])

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
        <div>
          <div className="rounded-[28px] bg-white p-6 shadow-sm dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
            <h3 className="mb-4 text-3xl font-bold text-[#0b1a2a] dark:text-[#dbe7f5]">🔥 Hot tasks near you</h3>
            {loading ? (
              <p className="text-xl text-[#5f748b] dark:text-[#b8d1ef]">Loading campus tasks...</p>
            ) : (
              requests.slice(0, 8).map((task, index) => (
                <button
                  type="button"
                  key={task.id || `${task.item}-${index}`}
                  onClick={() => setActiveTask(task)}
                  className={`flex w-full items-center justify-between border-b border-[#ecf1f7] py-4 text-left transition dark:border-[#2a3b53] ${
                    activeTask?.id === task.id ? 'bg-[#f3f7fb] dark:bg-[#1b2a40]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-2xl font-semibold text-[#0b1a2a] dark:text-[#dbe7f5]">{task.item}</p>
                      <p className="text-xl text-[#5f748b] dark:text-[#b8d1ef]">{task.from}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#e6f0f9] px-4 py-1 text-xl font-semibold text-[#1e3c5c]">${task.tip} tip</span>
                </button>
              ))
            )}
          </div>

          <div className="mt-6">
            <RouteMap activeTask={activeTask} />
          </div>
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
