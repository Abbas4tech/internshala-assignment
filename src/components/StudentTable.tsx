import React, { useState } from "react";
import DateRangePicker from "./DatePicket";

interface Student {
  name: string;
  dateOfBirth: string;
  gender: string;
}

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({
  students,
}: StudentTableProps) => {
  const [genderFilter, setGenderFilter] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleGenderFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGenderFilter(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const studentDate = new Date(student.dateOfBirth);
    const start = startDate ? new Date(startDate) : null;
    console.log(startDate);
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
    <div>
      <h1>Date Range Picker</h1>
      <DateRangePicker onChange={handleDateChange} />

      <div className="mb-4">
        <label htmlFor="gender-filter" className="mr-2">
          Gender:
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
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
