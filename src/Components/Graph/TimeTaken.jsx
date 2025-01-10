import { TbTimelineEventExclamation } from "react-icons/tb";
import tsc1 from "../../assets/Picture1.png"
import tsc2 from "../../assets/Picture2.png"

const TimeTaken = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-1 text-gray-500">
        <TbTimelineEventExclamation className="text-2xl " />
        <h3 className="text-lg font-semibold">Time Taken</h3>
      </div>
      <div className="mt-4 space-y-4">
        <img src={tsc2} alt="" />
        <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
      <div className="mt-6 space-y-4">
        <img src={tsc1} alt="" />
        <h1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
      </div>
    </div>
  );
};

export default TimeTaken;
