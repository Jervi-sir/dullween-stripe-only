import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast'
import { useContext } from 'react';

// Create a context with an empty function as the default value
export const ToastContext = createContext({
  showLoading: () => { },
});

export function useToast() {
  return useContext(ToastContext);
}

export const ToastProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const duration = 900;
  const showLoading = () => {
    setIsLoading(true);
    
    toast.loading(
      (t) => (
        isLoading &&
        <span>
          {/* any jsx content here */}
        </span>
      ),
      {
        id: 'loading', // unique id

        duration: duration,
        style: {
          // fontWeight: 'bold',
          border: '1px solid #000',
          paddingLeft: '1rem',
          color: '#000',
          //backgroundColor: '#eef2ff',
          backgroundColor: '#97171d',
          userSelect: 'none',
        },
        iconTheme: {
          primary: '#9A1B22',
          secondary: '#eef2ff',
        },
      }
    )

    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showLoading }}>
      {children}
    </ToastContext.Provider>
  );
};
