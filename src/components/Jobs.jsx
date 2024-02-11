/* eslint-disable react/prop-types */
import { useJobContext } from "../contexts/AppProvider";
import JobFilter from "./JobFilter";
import JobList from "./JobList";
function Jobs() {
  const { jobs: allJobs, filteredJob } = useJobContext();
  const jobs =
    filteredJob.length === 0
      ? allJobs
      : allJobs.filter((job) => {
          return filteredJob.some((filter) => {
            return (
              job.position.toLowerCase().includes(filter.toLowerCase()) ||
              job.role.toLowerCase() === filter.toLowerCase() || // Corrected this line
              job.languages.some(
                (language) => language.toLowerCase() === filter.toLowerCase()
              ) ||
              job.tools.some(
                (tool) => tool.toLowerCase() === filter.toLowerCase()
              )
            );
          });
        });

  return (
    <div className=" mb-4 mt-[40px] max-w-[900px] mx-auto">
      <JobFilter />
      {jobs.map((job) => {
        return <JobList job={job} key={job.id} />;
      })}
    </div>
  );
}

export default Jobs;
