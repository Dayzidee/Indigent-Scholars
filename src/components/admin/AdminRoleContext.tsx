'use client'

import { createContext, useContext, ReactNode } from 'react'

interface AdminRoleContextType {
  role: string | null;
}

const AdminRoleContext = createContext<AdminRoleContextType>({ role: null })

export function AdminRoleProvider({ children, role }: { children: ReactNode, role: string }) {
  return (
    <AdminRoleContext.Provider value={{ role }}>
      {children}
    </AdminRoleContext.Provider>
  )
}

export function useAdminRole() {
  return useContext(AdminRoleContext)
}
