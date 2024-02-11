import { useJobContext } from "../contexts/AppProvider";

/* eslint-disable react/prop-types */
function FilterButton({ el }) {
  const { setFilteredJob, filteredJob } = useJobContext();

  const isExists = filteredJob.includes(el);
  return (
    <button
      onClick={() => setFilteredJob((job) => [...job, el])}
      disabled={isExists}
      className={`text-[#5ba4a4]  font-semibold  ${
        isExists ? "bg-[#93dddd]" : "bg-[#effaf"
      } a] px-2.5 py-1.5 disabled:cursor-not-allowed`}
    >
      {el}
    </button>
  );
}

export default FilterButton;
