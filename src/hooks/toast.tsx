import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const Toast = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </Toast.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within a Toast');
  }

  return context;
}

export { ToastProvider, useToast };
