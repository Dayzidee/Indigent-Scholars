'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


type ModalType = 'success' | 'error' | 'info' | null

interface ModalContextType {
  showModal: (type: ModalType, title: string, message: string) => void
  hideModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<ModalType>(null)
  const [modalTitle, setModalTitle] = useState('')
  const [modalMessage, setModalMessage] = useState('')

  const showModal = (type: ModalType, title: string, message: string) => {
    setModalType(type)
    setModalTitle(title)
    setModalMessage(message)
    setIsOpen(true)

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      hideModal()
    }, 5000)
  }

  const hideModal = () => {
    setIsOpen(false)
    setTimeout(() => {
      setModalType(null)
      setModalTitle('')
      setModalMessage('')
    }, 300) // wait for exit animation
  }

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50 flex max-w-sm w-full bg-zinc-900 dark:bg-zinc-900 border border-zinc-700 dark:border-zinc-800 rounded-lg shadow-lg p-4 gap-3 items-start"
          >
            {modalType === 'success' && <span className="material-symbols-outlined text-green-500 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
            {modalType === 'error' && <span className="material-symbols-outlined text-red-500 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>}
            {modalType === 'info' && <span className="material-symbols-outlined text-blue-500 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>}

            
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-100 dark:text-zinc-100">{modalTitle}</h3>
              <p className="text-sm text-zinc-400 dark:text-zinc-400 mt-1">{modalMessage}</p>
            </div>
            
            <button
              onClick={hideModal}
              className="text-zinc-400 hover:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>

            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
