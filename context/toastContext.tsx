import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast'

// Create a context with an empty function as the default value
export const ToastContext = createContext({
  showLoading: () => { },
});

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
        // TIP: By giving it an id, yu can dismiss it with toast.dismiss('custom-toast')
        // TIP: When you give it an id, only one toast with that id can be shown at a time
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
