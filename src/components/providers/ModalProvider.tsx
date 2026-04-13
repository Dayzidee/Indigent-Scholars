'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, AlertCircle, CheckCircle2 } from 'lucide-react'

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
            {modalType === 'success' && <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />}
            {modalType === 'error' && <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />}
            {modalType === 'info' && <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />}
            
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-100 dark:text-zinc-100">{modalTitle}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{modalMessage}</p>
            </div>
            
            <button
              onClick={hideModal}
              className="text-zinc-400 hover:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
            >
              <X className="w-4 h-4" />
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
