import { LuSquareArrowDown } from "react-icons/lu";

const Accuracy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-white text-black p-4 h-72 rounded-md shadow-md">
        <div className="flex items-center gap-2">
          <LuSquareArrowDown size={24} />
          <h1 className="text-lg font-semibold">Compare Accuracy</h1>
        </div>
      </div>
      <div className="bg-white text-black p-4 h-72 rounded-md shadow-md">
        <div className="flex items-center gap-2">
          <LuSquareArrowDown size={24} />
          <h1 className="text-lg font-semibold">Compare Accuracy</h1>
        </div>
      </div>
      <div className="bg-white text-black p-4 h-72 rounded-md shadow-md">
        <div className="flex items-center gap-2">
          <LuSquareArrowDown size={24} />
          <h1 className="text-lg font-semibold">Compare Accuracy</h1>
        </div>
      </div>
    </div>
  );
};

export default Accuracy;
