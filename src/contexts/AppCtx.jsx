import { createContext, useContext, useState } from 'react';

const AppCtx = createContext();

export const useApp = () => {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
};

export default function AppProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <AppCtx.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </AppCtx.Provider>
  );
}