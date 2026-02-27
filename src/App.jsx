import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import AppLayout from './layout/AppLayout'
import Features from './pages/Features'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Login from './pages/Login'
import RequesterDashboard from './pages/RequesterDashboard'
import RunnerDashboard from './pages/RunnerDashboard'
import Safety from './pages/Safety'
import Signup from './pages/Signup'

const REQUESTS_KEY = 'dorm_dash_react_requests'

const starterRequests = [
  { id: 'r1', item: 'Tuck Shop run', from: 'West Hall 5th floor', tip: 12 },
  { id: 'r2', item: 'Package pickup', from: 'Mailroom -> North Hall', tip: 8 },
  { id: 'r3', item: 'Coffee + bagel', from: 'Starbucks -> Library', tip: 10 },
  { id: 'r4', item: 'Print job pickup', from: 'Library -> East Hall', tip: 6 },
]

function App() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(REQUESTS_KEY)
    if (saved) {
      try {
        setRequests(JSON.parse(saved))
      } catch {
        setRequests([])
      }
    }
  }, [])

  const mergedRunnerRequests = useMemo(() => [...requests, ...starterRequests], [requests])

  const addRequest = (request) => {
    const next = [{ ...request, id: crypto.randomUUID(), createdAt: new Date().toISOString() }, ...requests]
    setRequests(next)
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(next))
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/runner-dashboard" element={<RunnerDashboard requests={mergedRunnerRequests} />} />
        <Route
          path="/requester-dashboard"
          element={<RequesterDashboard requests={requests} onAddRequest={addRequest} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  )
}

export default App
