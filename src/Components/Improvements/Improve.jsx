import { IoTrendingUpOutline } from "react-icons/io5";

const Improve = () => {
  const improvements = [
    { label: "Geography", color: "bg-green-200 text-green-800" },
    { label: "Politics", color: "bg-blue-200 text-blue-800" },
    { label: "Current Affairs", color: "bg-yellow-200 text-yellow-800" },
    { label: "General Studies", color: "bg-red-200 text-red-800" },
    { label: "Mathematics", color: "bg-purple-200 text-purple-800" },
    { label: "Social Studies", color: "bg-pink-200 text-pink-800" },
    { label: "English Literature", color: "bg-indigo-200 text-indigo-800" },
    { label: "Indian History", color: "bg-orange-200 text-orange-800" },
    { label: "Economics", color: "bg-teal-200 text-teal-800" },
  ];

  return (
    <div className='bg-white p-4 rounded-lg shadow-md space-y-3'>
      <div className="flex items-center gap-2 ">
        <IoTrendingUpOutline className='text-2xl text-gray-400' />
        <h1 className="font-semibold text-gray-400">Improvements</h1>
      </div>
      <h1>Subjects Understanding</h1>
      <div className="flex flex-wrap gap-2">
        {improvements.map((item, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Improve;