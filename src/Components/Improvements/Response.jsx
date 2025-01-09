import { LuClockAlert } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";

const Response = () => {
  return (
    <div className='h-full'>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center gap-2 text-gray-400 mb-3">
          <LuClockAlert size={24} />
          <h1 className="text-lg font-semibold">Response</h1>
        </div>
      <div className="text-sm w-2/4 bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
          Std Time - 2min
        </div> 
      <div className="flex items-center justify-between my-3 px-2 bg-blue-100 border-2 border-black rounded-md border-dashed">
      <div className="flex items-baseline my-3">
        <h1 className="text-3xl text-green-500 font-semibold">60</h1>
        <p> <span className="text-xl">%</span> Ans took</p>
      </div>
      <div className="flex items-baseline text-gray-400">
        <FaArrowUp size={24} className="text-green-500" />
        <p className="text-green-500">2min </p>  
      </div>
      </div>
      <hr className="border border-black" />
      <p className="text-2xl font-semibold text-center mt-2 mb-32">You are <span className="text-red-500">slow</span> !</p>
    </div>
    </div>
  );
};

export default Response;