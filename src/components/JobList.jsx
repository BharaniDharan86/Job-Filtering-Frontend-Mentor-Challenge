/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useJobContext } from "../contexts/AppProvider";
import FilterButton from "./FilterButton";
import img from "./images/photosnap.svg";
function JobList({ job }) {
  const {
    id,
    company,
    logo,
    new: recent,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const filterBy = [role, level, ...languages, ...tools];

  return (
    <div className="">
      <div className="flex gap-2 items-center bg-white   mb-5 px-3 py-4 shadow-lg shadow-color">
        <img src={img} alt={company} className="h-[70px] w-[70px]" />
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="flex gap-2 items-center mb-1 p-1">
              <h1 className="text-[#5ba4a4] font-bold text-lg capitalize">
                {company}
              </h1>
              {recent && (
                <p className="uppercase bg-[#5ba4a4] font-semibold text-[12px] w-fit text-white p-1 rounded-full">
                  New!
                </p>
              )}
              {featured && (
                <p className="uppercase bg-slate-950 font-semibold text-[12px] w-fit text-white p-1 rounded-full">
                  Featured
                </p>
              )}
            </div>
            <h1 className="font-bold text-stone-900 text-lg tracking-wide mb-1 p-1">
              {position}
            </h1>
            <div className="flex gap-4 font-semibold text-[#7b8e8e] tracking-tight mb-1 p-1">
              <p> {postedAt}</p>
              <p>{contract}</p>
              <p>{location}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {filterBy.map((el, ind) => {
              return <FilterButton el={el} key={ind} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
