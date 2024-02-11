/* eslint-disable react/prop-types */
import { useJobContext } from "../contexts/AppProvider";
import JobFilter from "./JobFilter";
import JobList from "./JobList";
function Jobs() {
  const { jobs: allJobs, filteredJob } = useJobContext();
  const jobs = filteredJob.length === 0 ? allJobs : allJobs;

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
