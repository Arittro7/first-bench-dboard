import { IoTrendingUpOutline } from "react-icons/io5";

const approachData = [
  { percentage: 25, label: "Based on", info: "Facts"},
  { percentage: 32, label: "Based on" , info: "Analysis" },
  { percentage: 19, label: "Based on" , info: "Elimination" },
  { percentage: 24, label: "Based on" , info: "Guess" },
];

const Approach = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      
        <div className="flex items-center gap-2 text-gray-400 mb-3">
        <IoTrendingUpOutline className='text-2xl text-gray-400' />
                  <h1 className="text-lg font-semibold">Approach Data</h1>
                </div>
      
      {approachData.map((item, index) => (
        <div
          key={index}
          className="flex items-center  p-2 mb-2 border-2 border-blue-400 rounded-md"
        >
          <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold bg-blue-100 p-1 rounded-md text-blue-700">{item.percentage}%</p>
          <p className="text-gray-600">{item.label} <span className="font-bold text-blue-700">{item.info}</span> </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;