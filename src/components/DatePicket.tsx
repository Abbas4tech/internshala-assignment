import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
interface DateRangePickerProps {
  onChange: (startDate: Date, endDate: Date) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const [selection, setSelection] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges: any) => {
    setSelection(ranges.selection);
    onChange(ranges.selection.startDate, ranges.selection.endDate);
  };

  return (
    <div className="date-range-picker">
      <DateRange
        ranges={[selection]}
        onChange={handleSelect}
        months={1}
        direction="horizontal"
        retainEndDateOnFirstSelection={true}
      />
    </div>
  );
};

export default DateRangePicker;
