import rsltImg from "../../assets/result.png";
import proImg from "../../assets/Ari.png";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { LuFileSymlink } from "react-icons/lu";
import { IoAlertCircleOutline } from "react-icons/io5";

const Result = () => {
  return (
    <div className="bg-blue-100 rounded-lg shadow-md">
      <div className="p-4 text-center space-y-2">
        <img className="w-56 p-4" src={rsltImg} alt="" />
        <h1 className="text-3xl font-bold">Your Result!</h1>
        <p>All your insights & details in one place</p>
      </div>
      {/* middle section */}
      <div className="bg-white flex items-center justify-between p-2 rounded-b-lg">
        <div className="flex w-full items-center space-x-4 py-2 bg-gray-200 rounded-md">
          <div>
            <MdOutlineMarkunreadMailbox
              className="ml-2 p-2 bg-blue-500 rounded-lg"
              size={42}
            ></MdOutlineMarkunreadMailbox>
          </div>
          <div>
            <h1 className="uppercase w-fit text-sm rounded-md p-1 bg-blue-900 text-white">
              You've passed
            </h1>
            <p>
              <span className="text-3xl font-semibold">136</span>/240
            </p>
          </div>
          <div className="border-l-2 border-gray-500">
            <h1 className="bg-teal-500 px-4 py-1 ml-2 text-white rounded-md">
              76%
            </h1>
            <h1 className=" text-teal-500 ml-2 text-sm uppercase">Accuracy</h1>
          </div>
        </div>
      </div>
      {/* Profile details */}
      <div className="bg-white p-2 mt-3 rounded-lg shadow-md">
        <div className="bg-gray-200 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={proImg}
              alt="Profile"
              className="ml-2 p-1 w-20 bg-blue-200 rounded-lg mr-5"
            />
            <div>
              <h2 className="text-lg font-bold text-blue-500">Top Score</h2>
              <span className="text-2xl font-semibold">230</span>
              <span className="text-sm">/240</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 p-1 border-t-2 border-gray-500 border-dashed">
            <div className="mt-2">
              <p>By Arittro</p>
            </div>
            <div>
              <h1 className="bg-green-400 px-1 rounded-md">92% Accuracy</h1>
            </div>
          </div>
        </div>
      </div>
      {/* status section */}
      <div className="bg-white p-2 mt-3 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Improve your Marks</h1>
        <p className="text-gray-300">Improve your score by practicing more</p>
        <button className="btn bg-blue-600 text-white font-semibold text-2xl w-full mt-9">Practice More</button>
      </div>
      {/* last section */}
      <div className="bg-white p-2 mt-3 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Revisit Paper</h1>
        <p className="text-gray-300">Challenge your friends by simply sharing a link to this test</p>
        <div className="flex justify-center">
        <button className="btn bg-blue-600 w-4/5 text-white font-semibold text-2xl mt-9"><LuFileSymlink/> Visit</button>
        </div>
        <div className="mt-10 flex space-x-2 text-gray-300">
        <IoAlertCircleOutline size={36}/> 
        <h1> instructions for how to upload your handwritten material in given</h1>
        </div>
      </div>
    </div>
  );
};

export default Result;
