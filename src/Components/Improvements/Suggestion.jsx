import { WiStars } from "react-icons/wi";

const suggestions = [
  { range: "Q. 1-12", time: "40", timeAb:"sec", label: "Easy", color: "text-green-600" },
  { range: "Q. 12-32", time: "1.5", timeAb:"min", label: "Medium", color: "text-yellow-600" },
  { range: "Q. 32-40", time: "3", timeAb:"min", label: "Hard", color: "text-red-600" },
];

const Suggestion = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
    <div className="flex items-center gap-2 text-gray-400 mb-3">
              <WiStars size={24} />
              <h1 className="text-lg font-semibold">Suggestions</h1>
            </div>
    <div className="flex flex-wrap gap-1 mt-7">
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-3 rounded-md"
        >
          <div className="bg-blue-700 px-[2px] rounded-md mb-4 ">
         <p className="text-sm text-white  ">{item.range}</p>
         </div>

          <div className="flex items-baseline justify-center bg-blue-100 p-2 border-2 border-black rounded-md border-dashed">
         
          <p className="text-2xl font-bold">{item.time}</p>
          <p>{item.timeAb}</p>
          
          </div>
          <p className={`text-xl font-bold mt- ${item.color}`}>{item.label}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Suggestion;