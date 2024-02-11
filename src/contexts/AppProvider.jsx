/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

/**
 * 1.REMOVE DUPLICATE - CHECK IF THE TAG EXISTS OR NOT IS YES DISABLE IT
 * 2.FILTER THE JOBS - IF THE FILTERED JOBS IS EMPTY RENDER ALL OTHERWISE FILTER IS
 */
//gets the data -//http://localhost:8000/jobs

function AppProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [filteredJob, setFilteredJob] = useState([]);

  async function getJobsData() {
    const response = await fetch("http://localhost:8000/jobs");
    const data = await response.json();

    setJobs(data);
  }

  useEffect(() => {
    getJobsData();
  }, []);

  function removeFilteredJobs(item) {
    setFilteredJob((filtered) => filtered.filter((job) => job !== item));
  }

  function clearFilteredJobs() {
    setFilteredJob([]);
  }

  return (
    <AppContext.Provider
      value={{
        jobs,
        filteredJob,
        removeFilteredJobs,
        setFilteredJob,
        clearFilteredJobs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useJobContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default AppProvider;
