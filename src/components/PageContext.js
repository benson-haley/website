import { createContext, useContext, useState, useRef, useEffect } from 'react';

const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("Software Engineer");
  const [resumeLocation, setResumeLocation] = useState("/resume.pdf");
  const canPageChange = useRef(false);

  // Run only after the page is done loading.
  useEffect(() => {
    canPageChange.current = true;
  }, []);

  return (
    <PageContext.Provider value={{ page, setPage, resumeLocation, setResumeLocation, canPageChange }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
