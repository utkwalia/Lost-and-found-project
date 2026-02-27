import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { MessageCircle, Send, X } from 'lucide-react'

const QUICK_ACTIONS = [
  'Where is my runner?',
  'Report an issue',
  'Payment/refund help',
  'Account verification help',
]

const BOT_RESPONSES = {
  'Where is my runner?':
    'Open Requester Dashboard and check Active Request tracking for ETA. If delayed over 10 minutes, use Report an issue.',
  'Report an issue':
    'Please share your request ID and a short summary. Support will prioritize safety-related incidents immediately.',
  'Payment/refund help':
    'Share request ID and a screenshot of the charge. Refund checks are usually completed within 24 hours.',
  'Account verification help':
    'Use a valid .edu email and a clear student ID photo. If it still fails, support can do a manual review.',
}

export default function SupportChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'bot', text: 'Hi, I am Dash Support. How can I help?' },
  ])

  const showPulse = useMemo(() => !isOpen, [isOpen])

  const pushMessage = (text) => {
    const value = text.trim()
    if (!value) return

    const user = { id: `${Date.now()}-u`, role: 'user', text: value }
    const bot = {
      id: `${Date.now()}-b`,
      role: 'bot',
      text: BOT_RESPONSES[value] || 'Got it. Please share request ID and details so we can help quickly.',
    }

    setMessages((prev) => [...prev, user, bot])
    setDraft('')
  }

  const widget = (
    <>
      <button
        type="button"
        aria-label="Toggle support chat"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 rounded-full bg-[#1e3c5c] px-4 py-3 text-white shadow-xl ring-1 ring-[#2f5a83] transition hover:bg-[#17324d] relative"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">Support</span>
        {showPulse && (
          <>
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sky-300" />
            <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-sky-300/70" />
          </>
        )}
      </button>

      {isOpen && (
        <section className="fixed bottom-24 right-6 z-[9999] flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-[#dce6f0] bg-white shadow-2xl">
          <header className="flex items-center justify-between bg-[#1e3c5c] px-4 py-3 text-white">
            <h3 className="font-semibold">Dash Support</h3>
            <button type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Actions</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => pushMessage(action)}
                    className="rounded-full border border-[#c8d9ea] bg-white px-3 py-1.5 text-xs text-[#1e3c5c] hover:bg-[#f1f7fd]"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    message.role === 'user'
                      ? 'bg-[#1e3c5c] text-white'
                      : 'border border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <footer className="border-t border-slate-200 bg-white p-3">
            <div className="flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && pushMessage(draft)}
                placeholder="Type your question..."
                className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#1e3c5c]"
              />
              <button
                type="button"
                onClick={() => pushMessage(draft)}
                className="rounded-xl bg-[#1e3c5c] px-3 text-white hover:bg-[#17324d]"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </footer>
        </section>
      )}
    </>
  )

  return createPortal(widget, document.body)
}
