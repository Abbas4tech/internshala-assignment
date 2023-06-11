import React, { useRef, useState } from "react";
import DateRangePicker from "./DatePicket";

interface Student {
  name: string;
  dateOfBirth: string;
  gender: string;
}

interface StudentTableProps {
  students: Student[];
  coloums: string[];
}

const StudentTable: React.FC<StudentTableProps> = ({
  students,
  coloums,
}: StudentTableProps) => {
  const [genderFilter, setGenderFilter] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };
  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    handleDateChange(start, end);
  };

  const handleGenderFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGenderFilter(e.target.value);
  };
  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const filteredStudents = students.filter((student) => {
    const studentDate = new Date(student.dateOfBirth);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && studentDate < start) {
      return false;
    }

    if (end && studentDate > end) {
      return false;
    }

    if (genderFilter && student.gender !== genderFilter) {
      return false;
    }

    return true;
  });

  return (
    <>
      <h1 className="px-4 font-bold text-2xl">Students</h1>
      <section className="flex justify-between items-center">
        <p className="pl-4 font-semibold">Filter By : </p>
        <section className="flex px-4 w-[50%] justify-evenly items-center">
          <article className="flex gap-2 justify-between items-center">
            <label htmlFor="gender-filter" className="mr-2 font-semibold">
              Gender
            </label>
            <select
              id="gender-filter"
              value={genderFilter}
              onChange={handleGenderFilterChange}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </article>
          <div
            ref={pickerRef}
            className="relative font-semibold flex gap-2 items-center"
          >
            Date Range
            <div>
              <button type="button" onClick={handleButtonClick} className="btn">
                {endDate === null && startDate === null
                  ? "Select Dates"
                  : `${startDate?.toDateString()} - ${endDate?.toDateString()}`}
              </button>
              {showPicker && (
                <div className="absolute z-10 top-0 mt-10 left-0">
                  <DateRangePicker onChange={handleDateChange} />
                  <button
                    type="button"
                    onClick={() => handleDateRangeChange([null, null])}
                    className="btn btn-error"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>

      <div className="overflow-x-auto max-h-80 scrollbar">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {coloums.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.gender}</td>
                </tr>
              ))
            ) : (
              <section>No Students Found!!</section>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;
