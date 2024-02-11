import { useJobContext } from "../contexts/AppProvider";

/* eslint-disable react/prop-types */
function JobFilter() {
  const { filteredJob, removeFilteredJobs, clearFilteredJobs } =
    useJobContext();

  if (filteredJob.length == 0) return <p></p>;
  return (
    <div className="mb-3 text-center flex gap-2 bg-white h-fit px-2 py-4 ">
      {filteredJob.map((job, ind) => {
        return (
          <div key={ind}>
            <span>{job}</span>
            <button
              className="bg-[#5ba4a4] px-2 hover:bg-stone-900 text-white ml-1 transition-colors duration-300"
              onClick={() => {
                removeFilteredJobs(job);
              }}
            >
              x
            </button>
          </div>
        );
      })}

      <button className="text-stone-900" onClick={clearFilteredJobs}>
        clear
      </button>
    </div>
  );
}

export default JobFilter;
