import rsltImg from "../../assets/result.png"
const Result = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 text-center space-y-2">
      <img className="w-56 p-4" src={rsltImg} alt="" />
      <h1 className="text-3xl font-bold">Your Result!</h1>
      <p>All your insights & details in one place</p>
      </div>
    </div>
  );
};

export default Result;