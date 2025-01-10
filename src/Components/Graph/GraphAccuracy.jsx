import { TiArrowMinimiseOutline } from "react-icons/ti";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Label } from "recharts";

const data = [
  { slot: "1", accuracy: 75 },
  { slot: "2", accuracy: 25 },
  { slot: "3", accuracy: 50 },
  { slot: "4", accuracy: 60 },
  { slot: "5", accuracy: 70 },
  { slot: "6", accuracy: 50 },
  { slot: "7", accuracy: 75 },
];

const GraphAccuracy = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-1 text-gray-500">
      <TiArrowMinimiseOutline className="text-2xl " />
      <h3 className="text-lg font-semibold">Compare Accuracy</h3>
      </div>
      <div className="flex justify-center space-x-2 mb-4">
        {["10MIN", "15MIN", "30MIN", "45MIN"].map((time, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-sm rounded-lg ${
              time === "15MIN" ? "bg-teal-300" : "bg-gray-100"
            }`}
          >
            {time}
          </span>
        ))}
      </div>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="slot">
          <Label value="Slots" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Accuracy" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Bar dataKey="accuracy" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
    </div>
  );
};

export default GraphAccuracy;