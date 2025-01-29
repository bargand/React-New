import { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold">Current Date & Time</h2>
      <p className="text-lg text-gray-700">{dateTime.toLocaleString()}</p>
    </div>
  );
};

export default DateTimeDisplay;
