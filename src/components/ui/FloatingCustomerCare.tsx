'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

const mockMessages = [
  { id: 1, text: "Hello Amara! I'm your assigned Scholar Advisor. How can I assist you with your funding journey today?", sender: 'advisor', time: '09:41 AM' },
  { id: 2, text: "I've reviewed your recent transcript upload and it looks excellent.", sender: 'advisor', time: '09:42 AM' },
]

export function FloatingCustomerCare() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState(mockMessages)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMsg = { id: Date.now(), text: inputValue, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    setMessages([...messages, newMsg])
    setInputValue('')
    
    // Simple mock response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Thanks for the update. I'll pass this information to the compliance team for review.",
        sender: 'advisor',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
    }, 1500)
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-zinc-800/10"
          >
            Need help? Chat with an advisor
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-80 md:w-96"
          >
            <Card className="shadow-2xl border border-zinc-800 overflow-hidden rounded-3xl bg-zinc-900 flex flex-col h-[400px] md:h-[500px] max-h-[70vh]">
              {/* Header */}
              <div className="bg-primary scholar-gradient p-4 md:p-6 text-white flex justify-between items-center group">
                <div className="flex items-center gap-3 md:gap-4">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800/20 flex items-center justify-center border border-zinc-800/20 shrink-0">
                      <span className="material-symbols-outlined text-white text-lg md:text-xl">support_agent</span>
                   </div>
                   <div className="min-w-0">
                      <p className="font-headline font-black text-base md:text-lg truncate">Scholar Advisor</p>
                      <div className="flex items-center gap-1.5">
                         <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shrink-0"></span>
                         <span className="text-[9px] md:text-[10px] font-bold opacity-70 uppercase tracking-widest leading-none">Online & Ready</span>
                      </div>
                   </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-all">
                   <span className="material-symbols-outlined text-white text-xl md:text-2xl">close</span>
                </button>
              </div>

              {/* Messages Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-zinc-800/50 scrollbar-hide">
                {messages.map((msg) => (
                  <div key={msg.id} className={cn("flex flex-col", msg.sender === 'user' ? "items-end" : "items-start")}>
                    <div className={cn(
                      "max-w-[90%] md:max-w-[85%] p-3 md:p-4 rounded-2xl text-[11px] md:text-sm font-body leading-relaxed shadow-sm",
                      msg.sender === 'user' ? "bg-primary text-white rounded-tr-none" : "bg-zinc-900 text-on-surface rounded-tl-none border border-zinc-800"
                    )}>
                      {msg.text}
                    </div>
                    <span className="text-[8px] md:text-[9px] font-bold text-outline uppercase mt-1 px-1 tracking-widest">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-3 md:p-4 bg-zinc-900 border-t border-zinc-800">
                <div className="relative flex items-center bg-zinc-800 rounded-2xl border border-zinc-700 focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..." 
                    className="w-full bg-transparent pl-4 pr-12 py-3 md:py-3.5 text-xs md:text-sm font-body focus:outline-none"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className={cn(
                      "absolute right-2 p-1.5 md:p-2 rounded-lg transition-all",
                      inputValue.trim() ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105" : "text-zinc-300"
                    )}
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                   </button>
                </div>
                <p className="text-[8px] md:text-[9px] text-center text-outline font-bold uppercase mt-3 tracking-widest">Scholar Support Unit</p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-12 h-12 md:w-14 md:h-14 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative overflow-hidden",
          isOpen ? "bg-zinc-800 rotate-90" : "bg-primary"
        )}
      >
        <div className="absolute inset-0 bg-zinc-800/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="material-symbols-outlined text-2xl md:text-3xl relative z-10 transition-transform">
          {isOpen ? 'close' : 'support_agent'}
        </span>
      </button>
    </div>
  )
}
